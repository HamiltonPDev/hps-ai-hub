import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import type { ToolData } from "../types";
import styles from "./nodes.module.css";

// React Flow passes data as Record<string, unknown>; we cast to our typed shape.
export const ToolNode = memo(function ToolNode({ data, selected }: NodeProps) {
  const d = data as unknown as ToolData;
  return (
    <div className={`${styles.node} ${selected ? styles.selected : ""}`}>
      <div className={styles.inner}>
        <span aria-hidden="true" className={styles.icon}>
          🔧
        </span>
        <div style={{ overflow: "hidden", flex: 1 }}>
          <div className={styles.name}>{d.name}</div>
          <div className={styles.sub}>{d.descriptor}</div>
        </div>
      </div>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
});
