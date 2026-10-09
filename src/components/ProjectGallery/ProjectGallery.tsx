import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { showcaseImages } from "../../data/projects";
import { business } from "../../data/business";
import { useLanguage } from "../../i18n/useLanguage";
import { SectionHeading } from "../common/SectionHeading";
import { Lightbox } from "../common/Lightbox";
import styles from "./ProjectGallery.module.css";

const lightboxItems = showcaseImages.map((item) => ({
  image: item.image,
  title: item.alt,
}));

export function ProjectGallery() {
  const [index, setIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <section
      id="gallery"
      className="section container"
      aria-labelledby="gallery-title"
    >
      <SectionHeading
        id="gallery-title"
        eyebrow={t("gallery.eyebrow")}
        title={t("gallery.title")}
        subtitle={t("gallery.subtitle")}
      />

      <div className={styles.masonry}>
        {showcaseImages.map((item, i) => (
          <button
            key={item.id}
            type="button"
            className={`${styles.item} ${item.tall ? styles.tall : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`${t("designs.view")}: ${item.alt}`}
          >
            <img
              src={item.image}
              alt={item.alt}
              loading="lazy"
              className={styles.image}
            />
          </button>
        ))}
      </div>

      <div className={styles.cta}>
        <p className={styles.ctaText}>{t("gallery.cta")}</p>
        <a
          href={business.whatsapp}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={18} />
          {t("gallery.talk")}
        </a>
      </div>

      {index !== null ? (
        <Lightbox
          items={lightboxItems}
          index={index}
          onClose={() => setIndex(null)}
          onNavigate={setIndex}
        />
      ) : null}
    </section>
  );
}
