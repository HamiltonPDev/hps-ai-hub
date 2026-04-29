import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import type { DomainData } from "../types";
import styles from "./nodes.module.css";

const DOMAIN_COLOR_VARS: Record<string, string> = {
  build: "var(--color-domain-build)",
  operate: "var(--color-domain-operate)",
  grow: "var(--color-domain-grow)",
  secure: "var(--color-domain-secure)",
};

// React Flow passes data as Record<string, unknown>; we cast to our typed shape.
export const DomainNode = memo(function DomainNode({
  data,
  selected,
}: NodeProps) {
  const d = data as unknown as DomainData;
  const accentColor =
    DOMAIN_COLOR_VARS[d.colorToken] ?? "var(--color-accent)";

  return (
    <div
      className={`${styles.node} ${styles.nodeDomain} ${selected ? styles.selected : ""}`}
      style={{ borderColor: selected ? "var(--color-accent)" : accentColor }}
    >
      <div className={styles.inner}>
        <span
          aria-hidden="true"
          className={styles.icon}
          style={{ color: accentColor }}
        >
          ◈
        </span>
        <div style={{ overflow: "hidden", flex: 1 }}>
          <div className={styles.domainName} style={{ color: accentColor }}>
            {d.name}
          </div>
          <div className={styles.sub}>domain</div>
        </div>
      </div>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
});
