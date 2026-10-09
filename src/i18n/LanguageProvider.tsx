import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations } from "./translations";
import { LanguageContext, type Lang, type Localized } from "./context";

const STORAGE_KEY = "miw-lang";

function getInitialLang(): Lang {
  if (typeof localStorage === "undefined") return "en";
  return localStorage.getItem(STORAGE_KEY) === "ta" ? "ta" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const toggle = useCallback(
    () => setLangState((prev) => (prev === "en" ? "ta" : "en")),
    [],
  );
  const t = useCallback(
    (key: string) =>
      translations[key as keyof typeof translations]?.[lang] ?? key,
    [lang],
  );
  const pick = useCallback((value: Localized) => value[lang], [lang]);

  const value = useMemo(
    () => ({ lang, setLang, toggle, t, pick }),
    [lang, setLang, toggle, t, pick],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
