import type { ElementType, ReactNode } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
}

// Wraps children and reveals them on scroll into view.
export function Reveal({
  children,
  as: Tag = "div",
  className,
  style,
}: RevealProps) {
  const ref = useScrollReveal<HTMLElement>();
  const classes = className ? `reveal ${className}` : "reveal";

  return (
    <Tag ref={ref} className={classes} style={style}>
      {children}
    </Tag>
  );
}
