import { useEffect, useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import { business } from "../../data/business";
import { useScrolled } from "../../hooks/useScrolled";
import { useLanguage } from "../../i18n/useLanguage";
import type { translations } from "../../i18n/translations";
import styles from "./Navbar.module.css";

const links: Array<{ key: keyof typeof translations; href: string }> = [
  { key: "nav.home", href: "#home" },
  { key: "nav.falseCeiling", href: "#designs" },
  { key: "nav.services", href: "#services" },
  { key: "nav.gallery", href: "#gallery" },
  { key: "nav.contact", href: "#contact" },
];

export function Navbar() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);
  const { t, toggle } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={`${styles.inner} container`} aria-label="Primary">
        <a href="#home" className={styles.brand} onClick={close}>
          <span className={styles.brandMain}>{business.nameLines[0]}</span>
          <span className={styles.brandSub}>{business.nameLines[1]}</span>
        </a>

        <ul className={styles.desktopLinks}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={`${styles.link} gold-underline`}>
                {t(link.key)}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={styles.langToggle}
          onClick={toggle}
          aria-label="Switch language"
        >
          <Languages size={16} />
          {t("nav.language")}
        </button>

        <a href="#contact" className={`btn btn-primary ${styles.cta}`}>
          {t("nav.getQuote")}
        </a>

        <button
          type="button"
          className={styles.hamburger}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <div
        className={`${styles.mobilePanel} ${open ? styles.mobileOpen : ""}`}
        aria-hidden={!open}
      >
        <ul className={styles.mobileLinks}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.mobileLink} onClick={close}>
                {t(link.key)}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className={styles.langToggleMobile}
          onClick={toggle}
        >
          <Languages size={18} />
          {t("nav.language")}
        </button>
        <a href="#contact" className="btn btn-primary" onClick={close}>
          {t("nav.getQuote")}
        </a>
      </div>
    </header>
  );
}
