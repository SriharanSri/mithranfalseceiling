import { benefits } from "../../data/content";
import { useLanguage } from "../../i18n/useLanguage";
import { SectionHeading } from "../common/SectionHeading";
import { Reveal } from "../common/Reveal";
import styles from "./Benefits.module.css";

export function Benefits() {
  const { t, pick } = useLanguage();

  return (
    <section className="section container" aria-labelledby="benefits-title">
      <SectionHeading
        id="benefits-title"
        eyebrow={t("benefits.eyebrow")}
        title={t("benefits.title")}
        subtitle={t("benefits.subtitle")}
      />

      <div className={styles.grid}>
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <Reveal
              key={benefit.number}
              className={styles.card}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <span className={styles.number}>{benefit.number}</span>
              <span className={styles.iconWrap}>
                <Icon size={26} strokeWidth={1.5} />
              </span>
              <h3 className={styles.title}>{pick(benefit.title)}</h3>
              <p className={styles.desc}>{pick(benefit.description)}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
