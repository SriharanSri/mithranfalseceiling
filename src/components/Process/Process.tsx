import { processSteps } from "../../data/content";
import { useLanguage } from "../../i18n/useLanguage";
import { SectionHeading } from "../common/SectionHeading";
import { Reveal } from "../common/Reveal";
import styles from "./Process.module.css";

export function Process() {
  const { t, pick } = useLanguage();

  return (
    <section className="section container" aria-labelledby="process-title">
      <SectionHeading
        id="process-title"
        eyebrow={t("process.eyebrow")}
        title={t("process.title")}
        subtitle={t("process.subtitle")}
      />

      <ol className={styles.timeline}>
        {processSteps.map((step, index) => (
          <Reveal
            key={step.number}
            as="li"
            className={styles.step}
            style={{ transitionDelay: `${index * 0.08}s` }}
          >
            <span className={styles.number}>{step.number}</span>
            <div className={styles.body}>
              <h3 className={styles.title}>{pick(step.title)}</h3>
              <p className={styles.desc}>{pick(step.description)}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
