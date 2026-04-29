import styles from "./Legend.module.css";

const ITEMS = [
  { label: "Agent", icon: "🤖" },
  { label: "Model", icon: "🧠" },
  { label: "Tool", icon: "🔧" },
  { label: "Domain", icon: "◈" },
];

export function Legend() {
  return (
    <div className={styles.legend} aria-label="Graph legend">
      <div className={styles.title}>Legend</div>
      {ITEMS.map((item) => (
        <div key={item.label} className={styles.item}>
          <span className={styles.itemIcon}>{item.icon}</span>
          <span className={styles.itemLabel}>{item.label}</span>
        </div>
      ))}
      <div className={styles.attribution}>Built with React Flow</div>
    </div>
  );
}
