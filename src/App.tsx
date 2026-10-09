import { LanguageProvider } from "./i18n/LanguageProvider";
import { Home } from "./pages/Home";

function App() {
  return (
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  );
}

export default App;
