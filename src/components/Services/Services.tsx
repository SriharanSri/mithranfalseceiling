import { services } from "../../data/services";
import { useLanguage } from "../../i18n/useLanguage";
import { SectionHeading } from "../common/SectionHeading";
import { Reveal } from "../common/Reveal";
import styles from "./Services.module.css";

export function Services() {
  const { t, pick } = useLanguage();

  return (
    <section
      id="services"
      className={styles.wrap}
      aria-labelledby="services-title"
    >
      <div className="container">
        <SectionHeading
          id="services-title"
          eyebrow={t("services.eyebrow")}
          title={t("services.title")}
          subtitle={t("services.subtitle")}
        />

        <div className={styles.grid}>
          {services.map((service, index) => {
            const Icon = service.icon;
            const cardClass = service.featured
              ? `${styles.card} ${styles.featured}`
              : styles.card;

            return (
              <Reveal
                key={service.id}
                className={cardClass}
                style={{ transitionDelay: `${index * 0.06}s` }}
              >
                {service.featured ? (
                  <span className={styles.badge}>
                    {t("services.specialty")}
                  </span>
                ) : null}
                <span className={styles.iconWrap}>
                  <Icon size={28} strokeWidth={1.5} />
                </span>
                <h3 className={styles.title}>{pick(service.title)}</h3>
                <p className={styles.desc}>{pick(service.description)}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
