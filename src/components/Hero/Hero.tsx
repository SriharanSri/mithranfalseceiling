import { MessageCircle, ArrowRight } from "lucide-react";
import { business } from "../../data/business";
import { heroImage } from "../../data/images";
import { useLanguage } from "../../i18n/useLanguage";
import styles from "./Hero.module.css";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.bg}>
        <img src={heroImage.src} alt={heroImage.alt} className={styles.bgImg} />
        <div className={styles.overlay} />
      </div>

      <div className={`container ${styles.content}`}>
        <span className={styles.eyebrow}>{business.name}</span>
        <h1 className={styles.title}>
          {t("hero.titleLine1")}
          <span className={styles.titleAccent}>{t("hero.titleLine2")}</span>
        </h1>
        <p className={styles.subtitle}>{t("hero.subtitle")}</p>

        <span className={styles.highlight}>{t("hero.highlight")}</span>

        <div className={styles.actions}>
          <a href="#contact" className="btn btn-primary">
            {t("hero.ctaQuote")}
            <ArrowRight size={18} />
          </a>
          <a
            href={business.whatsapp}
            className="btn btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} />
            {t("hero.ctaWhatsapp")}
          </a>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span>{t("hero.scroll")}</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
