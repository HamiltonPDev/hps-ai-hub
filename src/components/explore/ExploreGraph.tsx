// WHY dagre layout: LR hierarchy keeps tool/orchestration agents on left, models
// on the right — natural reading order that mirrors the "tools route to agents
// which use models" mental model of the HPS AI stack.

import { useState } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  type NodeChange,
  type EdgeChange,
  type NodeMouseHandler,
  applyNodeChanges,
  applyEdgeChanges,
  type Node,
  type Edge,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import styles from "./ExploreGraph.module.css";

import type { GraphNode, GraphEdge, DomainFilter, NodeData } from "./types";
import { AgentNode } from "./nodes/AgentNode";
import { ModelNode } from "./nodes/ModelNode";
import { ToolNode } from "./nodes/ToolNode";
import { DomainNode } from "./nodes/DomainNode";
import { DetailPanel } from "./DetailPanel";
import { FilterPills } from "./FilterPills";
import { Legend } from "./Legend";

// ─── Props ───────────────────────────────────────────────────────────────────

interface ExploreGraphProps {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getRelevantNodeIds(
  filter: DomainFilter,
  nodes: GraphNode[],
  edges: GraphEdge[],
): Set<string> {
  if (filter === "all") {
    return new Set(nodes.map((n) => n.id));
  }
  const domainId = `domain:${filter}`;
  const relevant = new Set<string>([domainId]);
  const queue = [domainId];
  while (queue.length > 0) {
    const current = queue.shift()!;
    for (const edge of edges) {
      if (edge.source === current && !relevant.has(edge.target)) {
        relevant.add(edge.target);
        queue.push(edge.target);
      }
      if (edge.target === current && !relevant.has(edge.source)) {
        relevant.add(edge.source);
        queue.push(edge.source);
      }
    }
  }
  return relevant;
}

// React Flow requires data to extend Record<string, unknown>.
// We satisfy this by spreading our typed NodeData into an object literal —
// the resulting type is structurally compatible with the constraint.
function buildFlowNodes(source: GraphNode[]): Node[] {
  return source.map((n) => ({
    id: n.id,
    type: n.type,
    position: n.position,
    data: { ...n.data } as Record<string, unknown>,
  }));
}

function buildFlowEdges(source: GraphEdge[]): Edge[] {
  return source.map((e) => ({
    id: e.id,
    source: e.source,
    target: e.target,
    style: {
      stroke: "var(--color-accent)",
      strokeOpacity: 0.25,
      strokeWidth: 1,
    },
  }));
}

// Custom node components receive data typed as NodeData via a cast in each node file.
// NODE_TYPES is stable (module-level) to avoid React Flow re-registering on each render.
const NODE_TYPES = {
  agent: AgentNode,
  model: ModelNode,
  tool: ToolNode,
  domain: DomainNode,
};

// ─── Main component ───────────────────────────────────────────────────────────

export default function ExploreGraph({
  nodes: initialNodes,
  edges: initialEdges,
}: ExploreGraphProps) {
  const [nodes, setNodes] = useState<Node[]>(() =>
    buildFlowNodes(initialNodes),
  );
  const [edges, setEdges] = useState<Edge[]>(() =>
    buildFlowEdges(initialEdges),
  );
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [filter, setFilter] = useState<DomainFilter>("all");

  const selectedGraphNode = selectedNodeId
    ? (initialNodes.find((n) => n.id === selectedNodeId) ?? null)
    : null;

  const relevantIds = getRelevantNodeIds(filter, initialNodes, initialEdges);

  const visibleNodes = nodes.map((n) => ({
    ...n,
    style: {
      ...n.style,
      opacity: relevantIds.has(n.id) ? 1 : 0.15,
    },
    selected: n.id === selectedNodeId,
  }));

  const visibleEdges = edges.map((e) => ({
    ...e,
    style: {
      stroke: "var(--color-accent)",
      strokeOpacity:
        relevantIds.has(e.source) && relevantIds.has(e.target) ? 0.35 : 0.05,
      strokeWidth: 1,
    },
  }));

  function onNodesChange(changes: NodeChange[]) {
    setNodes((nds) => applyNodeChanges(changes, nds));
  }

  function onEdgesChange(changes: EdgeChange[]) {
    setEdges((eds) => applyEdgeChanges(changes, eds));
  }

  const onNodeClick: NodeMouseHandler = (_, node) => {
    setSelectedNodeId((prev) => (prev === node.id ? null : node.id));
  };

  function onPaneClick() {
    setSelectedNodeId(null);
  }

  function handleNavigate(nodeId: string) {
    setSelectedNodeId(nodeId);
  }

  function handleClose() {
    setSelectedNodeId(null);
  }

  function getMiniMapNodeColor(node: Node): string {
    const data = node.data as unknown as NodeData;
    switch (data.type) {
      case "agent":
        return "oklch(70% 0.12 55)";
      case "model":
        return "oklch(68% 0.10 195)";
      case "tool":
        return "oklch(66% 0.09 40)";
      case "domain":
        return "oklch(66% 0.10 145)";
    }
  }

  return (
    <div className={styles.root}>
      {/* ── Filter pills — top left overlay ─────────────────────────────── */}
      <div className={styles.filterPills}>
        <FilterPills active={filter} onChange={setFilter} />
      </div>

      {/* ── Legend — top right overlay ───────────────────────────────────── */}
      <div
        className={styles.legend}
        style={{ right: selectedGraphNode ? "336px" : "16px" }}
      >
        <Legend />
      </div>

      {/* ── React Flow canvas ────────────────────────────────────────────── */}
      <div className={styles.canvas}>
        <ReactFlow
          nodes={visibleNodes}
          edges={visibleEdges}
          nodeTypes={NODE_TYPES}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          onPaneClick={onPaneClick}
          fitView
          fitViewOptions={{ padding: 0.1 }}
          nodesFocusable
          edgesFocusable={false}
          proOptions={{ hideAttribution: true }}
          style={{ background: "var(--color-background)" }}
          minZoom={0.2}
          maxZoom={2}
          defaultEdgeOptions={{
            style: {
              stroke: "var(--color-accent)",
              strokeOpacity: 0.25,
              strokeWidth: 1,
            },
          }}
        >
          <Background color="var(--color-border)" gap={24} size={1} />
          <Controls
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-md)",
            }}
          />
          <MiniMap
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-md)",
            }}
            nodeColor={getMiniMapNodeColor}
            maskColor="oklch(8.5% 0 0 / 0.7)"
          />
        </ReactFlow>
      </div>

      {/* ── Detail panel — right side slide-in ──────────────────────────── */}
      {selectedGraphNode && (
        <div className={styles.detail}>
          <DetailPanel
            node={selectedGraphNode}
            allNodes={initialNodes}
            edges={initialEdges}
            onClose={handleClose}
            onNavigate={handleNavigate}
          />
        </div>
      )}
    </div>
  );
}
