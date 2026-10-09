import { useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Lightbox.module.css";

export interface LightboxItem {
  image: string;
  title: string;
  category?: string;
}

interface LightboxProps {
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const current = items[index];

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + items.length) % items.length);
  }, [index, items.length, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate((index + 1) % items.length);
  }, [index, items.length, onNavigate]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goPrev, goNext]);

  if (!current) return null;

  return (
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-label={current.title}
      onClick={onClose}
    >
      <button
        type="button"
        className={styles.close}
        aria-label="Close"
        onClick={onClose}
      >
        <X size={28} />
      </button>

      <button
        type="button"
        className={`${styles.nav} ${styles.prev}`}
        aria-label="Previous image"
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
      >
        <ChevronLeft size={32} />
      </button>

      <figure className={styles.figure} onClick={(e) => e.stopPropagation()}>
        <img src={current.image} alt={current.title} className={styles.image} />
        <figcaption className={styles.caption}>
          {current.category ? (
            <span className={styles.cat}>{current.category}</span>
          ) : null}
          <span className={styles.title}>{current.title}</span>
        </figcaption>
      </figure>

      <button
        type="button"
        className={`${styles.nav} ${styles.next}`}
        aria-label="Next image"
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
}
