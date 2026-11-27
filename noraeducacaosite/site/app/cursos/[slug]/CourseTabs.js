"use client";

import { useState } from "react";
import { HYBRID_STEPS } from "../../lib/courses";
import styles from "./course.module.css";

const TABS = [
  { key: "overview", label: "Visão Geral" },
  { key: "how", label: "Como funciona" },
  { key: "program", label: "Conteúdo Programático" },
  { key: "audience", label: "Para quem é" },
  { key: "certification", label: "Certificação" },
];

export default function CourseTabs({ course }) {
  const [active, setActive] = useState(TABS[0].key);

  return (
    <section className={styles.tabsCard}>
      <div className={styles.tabBar} role="tablist" aria-label="Detalhes do curso">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={active === tab.key}
            className={`${styles.tabBtn} ${active === tab.key ? styles.tabBtnActive : ""}`}
            onClick={() => setActive(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={styles.tabPanel} role="tabpanel">
        {active === "overview" && <p className={styles.overviewText}>{course.overview}</p>}

        {active === "how" && (
          <ol className={styles.steps}>
            {HYBRID_STEPS.map((step) => (
              <li key={step.title}>
                <span className={styles.stepTitle}>{step.title}</span>
                <p className={styles.stepText}>{step.text}</p>
              </li>
            ))}
          </ol>
        )}

        {active === "program" && (
          <ul className={styles.programList}>
            {course.programTopics.map((topic) => (
              <li key={topic}>
                <span className={styles.check} aria-hidden="true">
                  ✓
                </span>
                {topic}
              </li>
            ))}
          </ul>
        )}

        {active === "audience" && (
          <>
            <p className={styles.overviewText}>{course.audience}</p>
            {course.prerequisites && (
              <div className={styles.prereqBox}>
                <span className={styles.prereqLabel}>Pré-requisitos</span>
                <p>{course.prerequisites}</p>
              </div>
            )}
          </>
        )}

        {active === "certification" && (
          <p className={styles.overviewText}>{course.certificationDetail}</p>
        )}
      </div>
    </section>
  );
}
