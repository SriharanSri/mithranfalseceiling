import { Phone, MessageCircle } from "lucide-react";
import { InstagramIcon } from "../common/InstagramIcon";
import { business } from "../../data/business";
import { useLanguage } from "../../i18n/useLanguage";
import styles from "./MobileCTA.module.css";

export function MobileCTA() {
  const { t } = useLanguage();

  return (
    <div className={styles.bar} aria-label="Quick contact">
      <a href={business.phoneTel} className={styles.call}>
        <Phone size={18} />
        {t("mobile.call")}
      </a>
      <a
        href={business.instagramUrl}
        className={styles.instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon size={18} />
        {t("mobile.instagram")}
      </a>
      <a
        href={business.whatsapp}
        className={styles.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={18} />
        {t("mobile.whatsapp")}
      </a>
    </div>
  );
}
