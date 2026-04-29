import { useEffect, useRef } from "react";
import type { NodeData, GraphNode, GraphEdge } from "./types";
import styles from "./DetailPanel.module.css";

interface DetailPanelProps {
  node: GraphNode | null;
  allNodes: GraphNode[];
  edges: GraphEdge[];
  onClose: () => void;
  onNavigate: (nodeId: string) => void;
}

function renderMetadata(
  data: NodeData,
): Array<{ label: string; value: string }> {
  switch (data.type) {
    case "agent":
      return [
        { label: "Role", value: data.role },
        { label: "Category", value: data.category },
        { label: "Model", value: data.model },
        { label: "Source", value: data.source },
        { label: "Read-only", value: data.readOnly ? "Yes" : "No" },
        ...(data.domains.length > 0
          ? [{ label: "Domains", value: data.domains.join(", ") }]
          : []),
      ];
    case "model":
      return [
        { label: "Provider", value: data.provider },
        { label: "Tier", value: data.tier },
        { label: "Cost", value: data.cost },
        { label: "Best for", value: data.bestFor },
        { label: "Free", value: data.isFree ? "Yes" : "No" },
      ];
    case "tool":
      return [
        { label: "Type", value: data.descriptor },
        { label: "Description", value: data.description },
        { label: "URL", value: data.url },
      ];
    case "domain":
      return [{ label: "Color category", value: data.colorToken }];
  }
}

function getDescription(data: NodeData): string {
  switch (data.type) {
    case "agent":
      return data.description;
    case "model":
      return data.bestFor;
    case "tool":
      return data.description;
    case "domain":
      return `${data.name} domain — routing category for related agents and specializations.`;
  }
}

function getNodeIcon(type: string): string {
  switch (type) {
    case "agent":
      return "🤖";
    case "model":
      return "🧠";
    case "tool":
      return "🔧";
    case "domain":
      return "◈";
    default:
      return "•";
  }
}

export function DetailPanel({
  node,
  allNodes,
  edges,
  onClose,
  onNavigate,
}: DetailPanelProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (node) closeButtonRef.current?.focus();
  }, [node]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && node) onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [node, onClose]);

  // Focus trap within panel
  useEffect(() => {
    if (!node || !panelRef.current) return;
    const panel = panelRef.current;
    const focusableSelector =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusables = Array.from(
      panel.querySelectorAll<HTMLElement>(focusableSelector),
    );
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    panel.addEventListener("keydown", trapFocus);
    return () => panel.removeEventListener("keydown", trapFocus);
  }, [node]);

  if (!node) return null;

  const { data } = node;
  const metadata = renderMetadata(data);
  const description = getDescription(data);
  const icon = getNodeIcon(node.type);

  const connectedNodeIds = edges
    .filter((e) => e.source === node.id || e.target === node.id)
    .map((e) => (e.source === node.id ? e.target : e.source));
  const connectedNodes = allNodes.filter((n) =>
    connectedNodeIds.includes(n.id),
  );

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Details for ${data.name}`}
      className={styles.panel}
    >
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span aria-hidden="true" className={styles.nodeIcon}>
            {icon}
          </span>
          <div>
            <div className={styles.nodeName}>{data.name}</div>
            <div className={styles.nodeType}>{node.type}</div>
          </div>
        </div>
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close detail panel"
          className={styles.closeBtn}
        >
          ✕
        </button>
      </div>

      {/* Description */}
      <div className={styles.descSection}>
        <p className={styles.desc}>{description}</p>
      </div>

      {/* Metadata */}
      <div className={styles.section}>
        <div className={styles.sectionLabel}>Metadata</div>
        <dl className={styles.metaDl}>
          {metadata.map(({ label, value }) => (
            <div key={label} className={styles.metaRow}>
              <dt className={styles.metaDt}>{label}</dt>
              <dd className={styles.metaDd}>{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Connected nodes */}
      {connectedNodes.length > 0 && (
        <div className={styles.sectionLast}>
          <div className={styles.sectionLabel}>Connected to</div>
          <ul className={styles.connList}>
            {connectedNodes.map((cn) => (
              <li key={cn.id}>
                <button
                  onClick={() => onNavigate(cn.id)}
                  className={styles.connBtn}
                >
                  <span className={styles.connIcon}>
                    {getNodeIcon(cn.type)}
                  </span>
                  <div style={{ minWidth: 0 }}>
                    <div className={styles.connName}>{cn.data.name}</div>
                    <div className={styles.connType}>{cn.type}</div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
