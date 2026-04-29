// Shared types for the Interactive Explore Graph island.
// All types must be JSON-serializable — data is computed at build time in
// explore.astro and passed as props to the React island.

export type NodeType = "agent" | "model" | "tool" | "domain";

export interface AgentData {
  type: "agent";
  name: string;
  slug: string;
  category: string;
  role: string;
  description: string;
  model: string;
  modelSlug?: string;
  source: string;
  domains: string[];
  tools: string[];
  readOnly: boolean;
}

export interface ModelData {
  type: "model";
  name: string;
  slug: string;
  provider: string;
  tier: string;
  cost: string;
  bestFor: string;
  isFree: boolean;
  usedBy: string[];
}

export interface ToolData {
  type: "tool";
  name: string;
  slug: string;
  descriptor: string;
  description: string;
  url: string;
}

export interface DomainData {
  type: "domain";
  name: string;
  slug: string;
  colorToken: "build" | "operate" | "grow" | "secure";
  agents: string[];
}

export type NodeData = AgentData | ModelData | ToolData | DomainData;

export interface GraphNode {
  id: string;
  type: NodeType;
  position: { x: number; y: number };
  data: NodeData;
}

export interface GraphEdge {
  id: string;
  source: string;
  target: string;
  type: "agent-model" | "agent-domain" | "tool-agent";
}

export interface GraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

// Domain filter: 'all' shows everything, others dim non-connected nodes
export type DomainFilter = "all" | "build" | "operate" | "grow" | "secure";
