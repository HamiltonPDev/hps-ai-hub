import type { DomainFilter } from "./types";
import styles from "./FilterPills.module.css";

interface FilterPillsProps {
  active: DomainFilter;
  onChange: (filter: DomainFilter) => void;
}

const PILLS: Array<{ label: string; value: DomainFilter; color?: string }> = [
  { label: "All", value: "all" },
  { label: "Build", value: "build", color: "var(--color-domain-build)" },
  { label: "Operate", value: "operate", color: "var(--color-domain-operate)" },
  { label: "Grow", value: "grow", color: "var(--color-domain-grow)" },
  { label: "Secure", value: "secure", color: "var(--color-domain-secure)" },
];

export function FilterPills({ active, onChange }: FilterPillsProps) {
  return (
    <div className={styles.group} role="group" aria-label="Filter by domain">
      {PILLS.map((pill) => {
        const isActive = active === pill.value;
        const accentColor = pill.color ?? "var(--color-accent)";

        return (
          <button
            key={pill.value}
            onClick={() => onChange(pill.value)}
            aria-pressed={isActive}
            className={`${styles.pill} ${isActive ? styles.pillActive : ""}`}
            style={
              isActive
                ? {
                    borderColor: accentColor,
                    // color-mix cannot reference a JS var — set inline for active state only
                    background: `color-mix(in oklch, ${accentColor} 15%, transparent)`,
                    color: accentColor,
                  }
                : undefined
            }
          >
            {pill.label}
          </button>
        );
      })}
    </div>
  );
}
