import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import type { ModelData } from "../types";
import styles from "./nodes.module.css";

// React Flow passes data as Record<string, unknown>; we cast to our typed shape.
export const ModelNode = memo(function ModelNode({
  data,
  selected,
}: NodeProps) {
  const d = data as unknown as ModelData;
  return (
    <div className={`${styles.node} ${selected ? styles.selected : ""}`}>
      <div className={styles.inner}>
        <span aria-hidden="true" className={styles.icon}>
          🧠
        </span>
        <div style={{ overflow: "hidden", flex: 1 }}>
          <div className={styles.name}>{d.name}</div>
          <div className={styles.sub}>
            {d.provider} · {d.tier}
          </div>
        </div>
      </div>
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
});
