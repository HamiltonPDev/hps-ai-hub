// Build-time graph data computation.
// Called from explore.astro frontmatter — NEVER imported in a React component.
// Returns serializable GraphData (no Promises, no Astro APIs).

import dagre from "dagre";
import type {
  GraphData,
  GraphNode,
  GraphEdge,
  AgentData,
  ModelData,
  ToolData,
  DomainData,
} from "./types";

// ─── Raw content types ────────────────────────────────────────────────────────

export interface RawAgent {
  slug: string;
  name: string;
  category?: string;
  role: string;
  description: string;
  model: string;
  modelSlug?: string;
  source: string;
  domains: string[];
  tools: string[];
  readOnly: boolean;
}

export interface RawModel {
  slug: string;
  name: string;
  provider: string;
  tier: string;
  cost: string;
  bestFor: string;
  isFree: boolean;
  usedBy: string[];
}

// ─── Hardcoded tools (no content collection) ─────────────────────────────────

const TOOLS: ToolData[] = [
  {
    type: "tool",
    name: "OmO",
    slug: "omo",
    descriptor: "orchestration",
    description:
      "Oh-My-OpenAgent — multi-model category router and execution engine",
    url: "/omo",
  },
  {
    type: "tool",
    name: "Engram",
    slug: "engram",
    descriptor: "memory",
    description: "Persistent memory MCP that survives sessions and compactions",
    url: "/engram",
  },
  {
    type: "tool",
    name: "gentle-ai",
    slug: "gentle-ai",
    descriptor: "planning",
    description: "SDD planning layer with spec/design/tasks pipeline",
    url: "/gentle-ai",
  },
  {
    type: "tool",
    name: "Agent Teams Lite",
    slug: "agent-teams-lite",
    descriptor: "coordination",
    description: "Lightweight multi-agent coordination framework",
    url: "/agent-teams-lite",
  },
  {
    type: "tool",
    name: "GGA",
    slug: "gga",
    descriptor: "review",
    description: "Gentleman GitHub Agent — pre-commit AI code reviewer",
    url: "/gga",
  },
];

// Tool → agent cross-reference map (based on /omo and tool documentation)
const TOOL_AGENT_MAP: Record<string, string[]> = {
  omo: [
    "sisyphus",
    "atlas",
    "sisyphus-junior",
    "explore",
    "frontend",
    "hephaestus",
  ],
  engram: ["oracle", "prometheus", "metis", "atlas", "sisyphus"],
  "gentle-ai": ["prometheus", "metis", "momus"],
  "agent-teams-lite": ["atlas", "sisyphus"],
  gga: ["hps-security"],
};

// ─── Hardcoded routing domains (4 color groups from global.css) ──────────────
// These are the 4 routing CATEGORIES, not the 8 content-collection domains.
// They map to --color-domain-{slug} tokens and Pill.astro data-domain values.

const ROUTING_DOMAINS: DomainData[] = [
  {
    type: "domain",
    name: "Build",
    slug: "build",
    colorToken: "build",
    agents: [],
  },
  {
    type: "domain",
    name: "Operate",
    slug: "operate",
    colorToken: "operate",
    agents: [],
  },
  {
    type: "domain",
    name: "Grow",
    slug: "grow",
    colorToken: "grow",
    agents: [],
  },
  {
    type: "domain",
    name: "Secure",
    slug: "secure",
    colorToken: "secure",
    agents: [],
  },
];

// Maps content-collection domain slugs → routing category color
const DOMAIN_COLOR_MAP: Record<
  string,
  "build" | "operate" | "grow" | "secure"
> = {
  fullstack: "build",
  proptech: "build",
  iot: "operate",
  "business-ops": "operate",
  analytics: "grow",
  marketing: "grow",
  "ml-dl": "build",
  cybersecurity: "secure",
};

// ─── Layout with dagre ────────────────────────────────────────────────────────
// WHY dagre: auto-hierarchical LR layout keeps orchestration agents at top,
// workers and specialists in middle, models on the right — natural reading flow.

const NODE_WIDTH = 200;
const NODE_HEIGHT = 80;

function applyDagreLayout(nodes: GraphNode[], edges: GraphEdge[]): GraphNode[] {
  const g = new dagre.graphlib.Graph();
  g.setDefaultEdgeLabel(() => ({}));
  g.setGraph({
    rankdir: "LR",
    nodesep: 40,
    ranksep: 120,
    marginx: 40,
    marginy: 40,
  });

  for (const node of nodes) {
    g.setNode(node.id, { width: NODE_WIDTH, height: NODE_HEIGHT });
  }

  for (const edge of edges) {
    g.setEdge(edge.source, edge.target);
  }

  dagre.layout(g);

  return nodes.map((node) => {
    const dagreNode = g.node(node.id);
    return {
      ...node,
      position: {
        x: dagreNode.x - NODE_WIDTH / 2,
        y: dagreNode.y - NODE_HEIGHT / 2,
      },
    };
  });
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function buildGraphData(
  rawAgents: RawAgent[],
  rawModels: RawModel[],
): GraphData {
  const nodes: GraphNode[] = [];
  const edges: GraphEdge[] = [];

  // ── 1. Domain nodes ──────────────────────────────────────────────────────
  for (const domain of ROUTING_DOMAINS) {
    nodes.push({
      id: `domain:${domain.slug}`,
      type: "domain",
      position: { x: 0, y: 0 },
      data: domain,
    });
  }

  // ── 2. Model nodes ──────────────────────────────────────────────────────
  const modelSlugs = new Set(rawModels.map((m) => m.slug));

  for (const model of rawModels) {
    const data: ModelData = {
      type: "model",
      name: model.name,
      slug: model.slug,
      provider: model.provider,
      tier: model.tier,
      cost: model.cost,
      bestFor: model.bestFor,
      isFree: model.isFree,
      usedBy: model.usedBy,
    };
    nodes.push({
      id: `model:${model.slug}`,
      type: "model",
      position: { x: 0, y: 0 },
      data,
    });
  }

  // ── 3. Agent nodes + edges ──────────────────────────────────────────────
  const agentConnectedRoutingDomains = new Map<
    string,
    Set<"build" | "operate" | "grow" | "secure">
  >();

  for (const agent of rawAgents) {
    const data: AgentData = {
      type: "agent",
      name: agent.name,
      slug: agent.slug,
      category: agent.category ?? "worker",
      role: agent.role,
      description: agent.description,
      model: agent.model,
      modelSlug: agent.modelSlug,
      source: agent.source,
      domains: agent.domains,
      tools: agent.tools,
      readOnly: agent.readOnly,
    };
    nodes.push({
      id: `agent:${agent.slug}`,
      type: "agent",
      position: { x: 0, y: 0 },
      data,
    });

    // agent → model edge
    if (agent.modelSlug && modelSlugs.has(agent.modelSlug)) {
      edges.push({
        id: `e:agent-model:${agent.slug}:${agent.modelSlug}`,
        source: `agent:${agent.slug}`,
        target: `model:${agent.modelSlug}`,
        type: "agent-model",
      });
    }

    // agent → routing domain edges (via content-collection domain → color map)
    const routingCats = new Set<"build" | "operate" | "grow" | "secure">();
    for (const domainSlug of agent.domains) {
      const colorToken = DOMAIN_COLOR_MAP[domainSlug];
      if (colorToken && !routingCats.has(colorToken)) {
        routingCats.add(colorToken);
        edges.push({
          id: `e:agent-domain:${agent.slug}:${colorToken}`,
          source: `agent:${agent.slug}`,
          target: `domain:${colorToken}`,
          type: "agent-domain",
        });
      }
    }
    agentConnectedRoutingDomains.set(agent.slug, routingCats);
  }

  // ── 4. Tool nodes + edges ────────────────────────────────────────────────
  const agentSlugs = new Set(rawAgents.map((a) => a.slug));

  for (const tool of TOOLS) {
    nodes.push({
      id: `tool:${tool.slug}`,
      type: "tool",
      position: { x: 0, y: 0 },
      data: tool,
    });

    const targetAgents = TOOL_AGENT_MAP[tool.slug] ?? [];
    for (const agentSlug of targetAgents) {
      if (agentSlugs.has(agentSlug)) {
        edges.push({
          id: `e:tool-agent:${tool.slug}:${agentSlug}`,
          source: `tool:${tool.slug}`,
          target: `agent:${agentSlug}`,
          type: "tool-agent",
        });
      }
    }
  }

  // ── 5. Apply dagre layout ────────────────────────────────────────────────
  const laidOutNodes = applyDagreLayout(nodes, edges);

  return { nodes: laidOutNodes, edges };
}
