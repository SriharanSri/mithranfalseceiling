import { Check } from "lucide-react";
import { whyChoosePoints } from "../../data/content";
import { whyChooseImage } from "../../data/images";
import { useLanguage } from "../../i18n/useLanguage";
import { Reveal } from "../common/Reveal";
import styles from "./WhyChooseUs.module.css";

export function WhyChooseUs() {
  const { t, pick } = useLanguage();

  return (
    <section className={styles.wrap} aria-labelledby="why-title">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.imageCol}>
          <img
            src={whyChooseImage.src}
            alt={whyChooseImage.alt}
            loading="lazy"
            className={styles.image}
          />
        </Reveal>

        <Reveal className={styles.content}>
          <span className="eyebrow">{t("why.eyebrow")}</span>
          <h2 id="why-title" className="section-title">
            {t("why.title")}
          </h2>
          <ul className={styles.list}>
            {whyChoosePoints.map((point) => (
              <li key={point.en} className={styles.item}>
                <span className={styles.check}>
                  <Check size={16} strokeWidth={3} />
                </span>
                {pick(point)}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
