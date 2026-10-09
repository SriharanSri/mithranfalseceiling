import { createContext } from "react";

export type Lang = "en" | "ta";

// A string available in both supported languages.
export interface Localized {
  en: string;
  ta: string;
}

export interface LanguageValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  t: (key: string) => string;
  pick: (value: Localized) => string;
}

export const LanguageContext = createContext<LanguageValue | null>(null);
