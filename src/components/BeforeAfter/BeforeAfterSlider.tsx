import { useCallback, useEffect, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import styles from "./BeforeAfterSlider.module.css";

interface ImageConfig {
  src: string;
  alt: string;
}

interface BeforeAfterSliderProps {
  before: ImageConfig;
  after: ImageConfig;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const draggingRef = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!draggingRef.current) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      setFromClientX(clientX);
    };
    const stop = () => {
      draggingRef.current = false;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };
  }, [setFromClientX]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 4));
  };

  return (
    <div className={styles.container} ref={containerRef}>
      <img
        src={after.src}
        alt={after.alt}
        className={styles.image}
        draggable={false}
      />

      <img
        src={before.src}
        alt={before.alt}
        className={styles.image}
        draggable={false}
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      />

      <span className={`${styles.tag} ${styles.tagBefore}`}>{beforeLabel}</span>
      <span className={`${styles.tag} ${styles.tagAfter}`}>{afterLabel}</span>

      <div
        className={styles.divider}
        style={{ left: `${position}%` }}
        role="slider"
        tabIndex={0}
        aria-label="Before and after comparison slider"
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        onMouseDown={() => {
          draggingRef.current = true;
        }}
        onTouchStart={() => {
          draggingRef.current = true;
        }}
        onKeyDown={onKeyDown}
      >
        <span className={styles.handle}>
          <MoveHorizontal size={20} />
        </span>
      </div>
    </div>
  );
}
