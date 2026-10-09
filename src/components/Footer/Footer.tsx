import {
  Phone,
  MapPin,
  MessageCircle,
  ArrowUpRight,
  ArrowUp,
} from "lucide-react";
import { business } from "../../data/business";
import { useLanguage } from "../../i18n/useLanguage";
import type { translations } from "../../i18n/translations";
import { InstagramIcon } from "../common/InstagramIcon";
import styles from "./Footer.module.css";

const navLinks: Array<{ key: keyof typeof translations; href: string }> = [
  { key: "nav.home", href: "#home" },
  { key: "nav.falseCeiling", href: "#designs" },
  { key: "nav.services", href: "#services" },
  { key: "nav.gallery", href: "#gallery" },
  { key: "nav.contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.cta}`}>
        <div className={styles.ctaText}>
          <span className={styles.ctaEyebrow}>{t("footer.ctaEyebrow")}</span>
          <h2 className={styles.ctaTitle}>
            {t("footer.ctaBefore")} <em>{t("footer.ctaEm")}</em>{" "}
            {t("footer.ctaAfter")}
          </h2>
        </div>
        <a
          href={business.whatsapp}
          className={styles.ctaButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("footer.startProject")}
          <ArrowUpRight size={20} />
        </a>
      </div>

      <div className={styles.watermark} aria-hidden="true">
        {business.nameLines[0]}
      </div>

      <div className={`container ${styles.main}`}>
        <div className={styles.brandCol}>
          <div className={styles.brand}>
            <span className={styles.brandMain}>{business.nameLines[0]}</span>
            <span className={styles.brandSub}>{business.nameLines[1]}</span>
          </div>
          <p className={styles.tagline}>{t("footer.tagline")}</p>

          <div className={styles.socials}>
            <a
              href={business.instagramUrl}
              className={styles.social}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href={business.whatsapp}
              className={styles.social}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
            <a
              href={business.phoneTel}
              className={styles.social}
              aria-label="Call"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>

        <nav className={styles.linksCol} aria-label="Footer">
          <h3 className={styles.colTitle}>{t("footer.explore")}</h3>
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.navLink}>
                  {t(link.key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.contactCol}>
          <h3 className={styles.colTitle}>{t("footer.contact")}</h3>
          <ul className={styles.contactList}>
            <li>
              <Phone size={16} className={styles.icon} />
              <a href={business.phoneTel}>{business.phoneDisplay}</a>
            </li>
            <li>
              <MapPin size={16} className={styles.icon} />
              <span>{business.locationShort}</span>
            </li>
            <li>
              <InstagramIcon size={16} className={styles.icon} />
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {business.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p>
            © {year} {business.name}. {t("footer.rights")}
          </p>
          <button
            type="button"
            className={styles.backToTop}
            onClick={scrollTop}
          >
            {t("footer.backToTop")}
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
