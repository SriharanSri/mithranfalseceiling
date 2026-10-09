import type { LucideIcon } from "lucide-react";
import {
  Layers,
  PanelTop,
  Frame,
  Grid3x3,
  Tv,
  SquareStack,
  Sofa,
} from "lucide-react";
import type { Localized } from "../i18n/context";

export interface Service {
  id: string;
  title: Localized;
  description: Localized;
  icon: LucideIcon;
  featured?: boolean;
}

export const services: Service[] = [
  {
    id: "gypsum",
    title: { en: "Gypsum False Ceiling", ta: "ஜிப்சம் பால்ஸ் சீலிங்" },
    description: {
      en: "Custom gypsum ceiling designs with elegant profiles, concealed lighting and premium finishing.",
      ta: "நேர்த்தியான வடிவங்கள், மறைவு விளக்கு மற்றும் உயர்தர முடிப்புடன் கூடிய தனிப்பயன் ஜிப்சம் சீலிங் வடிவமைப்புகள்.",
    },
    icon: Layers,
    featured: true,
  },
  {
    id: "pvc",
    title: { en: "PVC Ceiling", ta: "பி.வி.சி சீலிங்" },
    description: {
      en: "Durable, moisture-resistant PVC ceilings ideal for kitchens, bathrooms and utility spaces.",
      ta: "சமையலறை, குளியலறை மற்றும் பயன்பாட்டு இடங்களுக்கு ஏற்ற நீடித்த, ஈரப்பதம் தாங்கும் பி.வி.சி சீலிங்.",
    },
    icon: PanelTop,
  },
  {
    id: "cornish",
    title: { en: "Cornish Ceiling", ta: "கார்னிஷ் சீலிங்" },
    description: {
      en: "Decorative cornish profiles that add depth and a refined architectural edge to any room.",
      ta: "எந்த அறைக்கும் ஆழத்தையும் நேர்த்தியான கட்டிடக்கலை தோற்றத்தையும் சேர்க்கும் அலங்கார கார்னிஷ் வடிவங்கள்.",
    },
    icon: Frame,
  },
  {
    id: "grid",
    title: { en: "2×2 Grid Ceiling", ta: "2×2 கிரிட் சீலிங்" },
    description: {
      en: "Clean modular grid ceilings with easy access and a tidy finish for offices and commercial use.",
      ta: "அலுவலகங்கள் மற்றும் வணிகப் பயன்பாட்டிற்கு எளிதான அணுகல் மற்றும் நேர்த்தியான முடிப்புடன் கூடிய கிரிட் சீலிங்.",
    },
    icon: Grid3x3,
  },
  {
    id: "tv-unit",
    title: { en: "Gypsum TV Unit Works", ta: "ஜிப்சம் டிவி யூனிட் பணிகள்" },
    description: {
      en: "Integrated gypsum TV units and feature walls designed around your living space.",
      ta: "உங்கள் வரவேற்பறைக்கேற்ப வடிவமைக்கப்பட்ட ஜிப்சம் டிவி யூனிட் மற்றும் சிறப்பு சுவர்கள்.",
    },
    icon: Tv,
  },
  {
    id: "paneling",
    title: { en: "Wall Paneling", ta: "சுவர் பேனலிங்" },
    description: {
      en: "Textured and decorative wall paneling that complements your ceiling and interiors.",
      ta: "உங்கள் சீலிங் மற்றும் இன்டீரியருக்கு பொருந்தும் அலங்கார சுவர் பேனலிங்.",
    },
    icon: SquareStack,
  },
  {
    id: "interior",
    title: { en: "Interior Decoration", ta: "இன்டீரியர் அலங்காரம்" },
    description: {
      en: "Thoughtful interior finishing touches that bring the whole space together.",
      ta: "முழு இடத்தையும் ஒருங்கிணைக்கும் நேர்த்தியான இன்டீரியர் முடிப்பு.",
    },
    icon: Sofa,
  },
];
