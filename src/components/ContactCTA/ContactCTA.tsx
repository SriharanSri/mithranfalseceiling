import { MessageCircle, Phone, MapPin } from "lucide-react";
import { business } from "../../data/business";
import { useLanguage } from "../../i18n/useLanguage";
import { InstagramIcon } from "../common/InstagramIcon";
import styles from "./ContactCTA.module.css";

export function ContactCTA() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className={styles.wrap}
      aria-labelledby="contact-title"
    >
      <div className={`container ${styles.inner}`}>
        <span className="eyebrow">{t("contact.eyebrow")}</span>
        <h2 id="contact-title" className={styles.title}>
          {t("contact.title")}
        </h2>
        <p className={styles.subtitle}>{t("contact.subtitle")}</p>

        <div className={styles.actions}>
          <a
            href={business.whatsapp}
            className="btn btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} />
            {t("contact.whatsapp")}
          </a>
          <a href={business.phoneTel} className="btn btn-outline">
            <Phone size={18} />
            {t("contact.call")}
          </a>
        </div>

        <ul className={styles.details}>
          <li className={styles.detail}>
            <MapPin size={18} className={styles.detailIcon} />
            <span>{business.location}</span>
          </li>
          <li className={styles.detail}>
            <Phone size={18} className={styles.detailIcon} />
            <a href={business.phoneTel} className="gold-underline">
              {business.phoneDisplay}
            </a>
          </li>
          <li className={styles.detail}>
            <InstagramIcon size={18} className={styles.detailIcon} />
            <a
              href={business.instagramUrl}
              className="gold-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {business.instagramHandle}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
