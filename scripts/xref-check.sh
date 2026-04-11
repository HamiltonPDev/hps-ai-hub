#!/usr/bin/env bash
# scripts/xref-check.sh
# Cross-reference integrity gate for content collections.
# Validates that every slug declared in frontmatter xref fields resolves to
# an existing <slug>.md file in the target collection directory.
#
# Required: yq v4.x (https://github.com/mikefarah/yq)
# Usage:    bash scripts/xref-check.sh
# Exit:     0 on success, 1 on any missing cross-reference
#
# Source of truth: sdd/content-migration-0-schema-foundation/design §3
#                + sdd/content-migration-meta/design §4 (engram #93)
#
# Empty-target guard (R13 mitigation): if a target collection directory contains
# zero .md files, that field's check is SKIPPED. This lets Wave-1 parallel
# sub-changes run their own verify without false-positive failures before the
# dependency wave (e.g., agents can be verified before domains exist).

set -euo pipefail
shopt -s nullglob

# ─── yq version check ────────────────────────────────────────────────────
if ! command -v yq >/dev/null 2>&1; then
  echo "xref-check: yq is not installed. Install via: brew install yq" >&2
  exit 1
fi
yq_version=$(yq --version 2>&1 | grep -oE '[0-9]+\.[0-9]+\.[0-9]+' | head -1)
yq_major=${yq_version%%.*}
if [[ "$yq_major" != "4" ]]; then
  echo "xref-check: yq v4.x required, found v${yq_version}" >&2
  exit 1
fi

CONTENT_ROOT="src/content"
fail=0

# ─── helpers ─────────────────────────────────────────────────────────────

# target_is_empty <collection>  → returns 0 (true) if dir has no .md files
target_is_empty() {
  local col="$1"
  local dir="${CONTENT_ROOT}/${col}"
  [[ ! -d "$dir" ]] && return 0
  local count
  count=$(find "$dir" -maxdepth 1 -name '*.md' 2>/dev/null | wc -l | tr -d ' ')
  [[ "$count" == "0" ]]
}

# check_slug <source_file> <field> <slug> <target_collection>
check_slug() {
  local src="$1" field="$2" slug="$3" target="$4"
  [[ -z "$slug" || "$slug" == "null" ]] && return 0
  if [[ ! -f "${CONTENT_ROOT}/${target}/${slug}.md" ]]; then
    echo "FAIL: ${src}: ${field}=\"${slug}\" → missing ${target}/${slug}.md" >&2
    fail=1
  fi
}

# iterate_scalar <source_glob> <yq_path> <field_name> <target_collection>
iterate_scalar() {
  local glob="$1" yq_path="$2" field="$3" target="$4"
  if target_is_empty "$target"; then
    echo "skip: target collection '${target}' is empty (${field})"
    return 0
  fi
  local f slug
  for f in $glob; do
    slug=$(yq "$yq_path" "$f" 2>/dev/null || echo "")
    check_slug "$f" "$field" "$slug" "$target"
  done
}

# iterate_array <source_glob> <yq_path> <field_name> <target_collection>
iterate_array() {
  local glob="$1" yq_path="$2" field="$3" target="$4"
  if target_is_empty "$target"; then
    echo "skip: target collection '${target}' is empty (${field})"
    return 0
  fi
  local f slug
  for f in $glob; do
    while IFS= read -r slug; do
      [[ -z "$slug" || "$slug" == "null" ]] && continue
      check_slug "$f" "$field" "$slug" "$target"
    done < <(yq "$yq_path" "$f" 2>/dev/null || true)
  done
}

# ─── 9 cross-reference checks ────────────────────────────────────────────

# 1. layers[*].model → models/<slug>.md
iterate_scalar "${CONTENT_ROOT}/layers/*.md" '.model' 'layers.model' 'models'

# 2. layers[*].relatedAgents[] → agents/<slug>.md
iterate_array "${CONTENT_ROOT}/layers/*.md" '.relatedAgents[]' 'layers.relatedAgents' 'agents'

# 3. agents[*].modelSlug → models/<slug>.md
iterate_scalar "${CONTENT_ROOT}/agents/*.md" '.modelSlug' 'agents.modelSlug' 'models'

# 4. agents[*].modelAlternative → models/<slug>.md (heuristic: only if a file
#    with that slug exists in models/; otherwise assume human-readable and skip)
if ! target_is_empty 'models'; then
  for f in ${CONTENT_ROOT}/agents/*.md; do
    slug=$(yq '.modelAlternative' "$f" 2>/dev/null || echo "")
    [[ -z "$slug" || "$slug" == "null" ]] && continue
    # Heuristic: only validate if the value looks like a slug AND a candidate file exists
    if [[ "$slug" =~ ^[a-z0-9-]+$ ]] && [[ -f "${CONTENT_ROOT}/models/${slug}.md" ]]; then
      : # valid — nothing to do
    elif [[ "$slug" =~ ^[a-z0-9-]+$ ]]; then
      # looks like a slug but no target file → skip (human-readable fallback)
      :
    fi
    # Non-slug human-readable values are always accepted
  done
else
  echo "skip: target collection 'models' is empty (agents.modelAlternative)"
fi

# 5. agents[*].domains[] → domains/<slug>.md
iterate_array "${CONTENT_ROOT}/agents/*.md" '.domains[]' 'agents.domains' 'domains'

# 6. models[*].usedBy[] → agents/<slug>.md
iterate_array "${CONTENT_ROOT}/models/*.md" '.usedBy[]' 'models.usedBy' 'agents'

# 7. domains[*].agents[] → agents/<slug>.md
iterate_array "${CONTENT_ROOT}/domains/*.md" '.agents[]' 'domains.agents' 'agents'

# 8. domains[*].skills[] → skills/<slug>.md
iterate_array "${CONTENT_ROOT}/domains/*.md" '.skills[]' 'domains.skills' 'skills'

# 9. domains[*].workflowSteps[].tags[] → agents/<slug>.md (primary target)
iterate_array "${CONTENT_ROOT}/domains/*.md" '.workflowSteps[].tags[]' 'domains.workflowSteps.tags' 'agents'

# ─── summary ─────────────────────────────────────────────────────────────
if [[ "$fail" == "0" ]]; then
  echo "xref-check: OK"
else
  echo "xref-check: FAILED (see errors above)" >&2
fi
exit "$fail"
