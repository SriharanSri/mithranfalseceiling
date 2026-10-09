import { useMemo, useState } from "react";
import { Plus } from "lucide-react";
import {
  categoryLabels,
  ceilingFilters,
  ceilingProjects,
} from "../../data/projects";
import type { CeilingCategory } from "../../data/projects";
import { useLanguage } from "../../i18n/useLanguage";
import { SectionHeading } from "../common/SectionHeading";
import { Lightbox } from "../common/Lightbox";
import styles from "./CeilingGallery.module.css";

type Filter = "All" | CeilingCategory;

export function CeilingGallery() {
  const [active, setActive] = useState<Filter>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { t, pick } = useLanguage();

  const visible = useMemo(() => {
    if (active === "All") return ceilingProjects;
    return ceilingProjects.filter((p) => p.category === active);
  }, [active]);

  const lightboxItems = visible.map((p) => ({
    image: p.image,
    title: pick(p.title),
    category: pick(categoryLabels[p.category]),
  }));

  const filterLabel = (filter: Filter) =>
    filter === "All" ? t("filter.All") : pick(categoryLabels[filter]);

  const openLightbox = (id: string) => {
    const idx = visible.findIndex((p) => p.id === id);
    if (idx >= 0) setLightboxIndex(idx);
  };

  return (
    <section
      id="designs"
      className="section container"
      aria-labelledby="designs-title"
    >
      <SectionHeading
        id="designs-title"
        eyebrow={t("designs.eyebrow")}
        title={t("designs.title")}
        subtitle={t("designs.subtitle")}
      />

      <div
        className={styles.filters}
        role="tablist"
        aria-label="Filter ceiling designs"
      >
        {ceilingFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={active === filter}
            className={`${styles.filter} ${active === filter ? styles.filterActive : ""}`}
            onClick={() => setActive(filter)}
          >
            {filterLabel(filter)}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {visible.map((project) => (
          <button
            key={project.id}
            type="button"
            className={styles.card}
            onClick={() => openLightbox(project.id)}
            aria-label={`${t("designs.view")}: ${pick(project.title)}`}
          >
            <img
              src={project.image}
              alt={pick(project.title)}
              loading="lazy"
              className={styles.image}
            />
            <span className={styles.overlay}>
              <span className={styles.category}>
                {pick(categoryLabels[project.category])}
              </span>
              <span className={styles.name}>{pick(project.title)}</span>
              <span className={styles.view}>
                <Plus size={16} /> {t("designs.view")}
              </span>
            </span>
          </button>
        ))}
      </div>

      {lightboxIndex !== null ? (
        <Lightbox
          items={lightboxItems}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      ) : null}
    </section>
  );
}
