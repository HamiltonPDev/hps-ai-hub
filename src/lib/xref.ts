// src/lib/xref.ts
// Cross-reference integrity helpers for content collections.
// Source of truth: sdd/content-migration-meta/design §4 (engram #93)
// Usage: pages that consume cross-referenced data import these helpers and
// call them in frontmatter BEFORE rendering. Any missing slug throws a build-time
// error, which fails `astro build` / `astro check` loudly.

import type { CollectionEntry, CollectionKey } from 'astro:content';

/**
 * Build a Set of slugs from a collection's entries.
 * The slug is the entry id with any trailing `.md` stripped, matching the
 * kebab-case filename convention established in meta-design §3.
 */
export function buildSlugSet<K extends CollectionKey>(
  items: CollectionEntry<K>[],
): Set<string> {
  return new Set(items.map((i) => i.id.replace(/\.md$/, '')));
}

/**
 * Assert a single optional cross-reference slug exists in the target collection.
 * Undefined values are accepted (they mean "no reference"). Missing slugs throw.
 *
 * @param source             human-readable origin, e.g. "agents/sisyphus"
 * @param field              field name on the source, e.g. "modelSlug"
 * @param value              the slug to validate (may be undefined)
 * @param targetSet          Set of valid slugs in the target collection
 * @param targetCollection   collection name for the error message
 */
export function assertXref(
  source: string,
  field: string,
  value: string | undefined,
  targetSet: Set<string>,
  targetCollection: string,
): void {
  if (value === undefined) return;
  if (!targetSet.has(value)) {
    throw new Error(
      `[xref] ${source}: ${field}="${value}" is not a valid slug in collection "${targetCollection}"`,
    );
  }
}

/**
 * Assert every slug in a list exists in the target collection.
 * Empty arrays are accepted (they mean "no references"). Any missing slug throws.
 */
export function assertXrefList(
  source: string,
  field: string,
  values: string[],
  targetSet: Set<string>,
  targetCollection: string,
): void {
  for (const v of values) {
    assertXref(source, field, v, targetSet, targetCollection);
  }
}
