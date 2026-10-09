import { beforeAfter } from "../../data/images";
import { useLanguage } from "../../i18n/useLanguage";
import { SectionHeading } from "../common/SectionHeading";
import { Reveal } from "../common/Reveal";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import styles from "./BeforeAfter.module.css";

export function BeforeAfter() {
  const { t } = useLanguage();

  return (
    <section className={styles.wrap} aria-labelledby="beforeafter-title">
      <div className="container">
        <SectionHeading
          id="beforeafter-title"
          eyebrow={t("beforeAfter.eyebrow")}
          title={t("beforeAfter.title")}
          subtitle={t("beforeAfter.subtitle")}
        />

        <Reveal className={styles.sliderWrap}>
          <BeforeAfterSlider
            before={beforeAfter.before}
            after={beforeAfter.after}
            beforeLabel={t("beforeAfter.before")}
            afterLabel={t("beforeAfter.after")}
          />
        </Reveal>
      </div>
    </section>
  );
}
