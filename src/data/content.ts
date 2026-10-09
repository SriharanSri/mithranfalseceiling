import type { LucideIcon } from "lucide-react";
import { Sparkles, Lightbulb, PencilRuler, Gem } from "lucide-react";
import type { Localized } from "../i18n/context";

export interface Benefit {
  number: string;
  title: Localized;
  description: Localized;
  icon: LucideIcon;
}

export const benefits: Benefit[] = [
  {
    number: "01",
    title: { en: "Modern Aesthetic", ta: "நவீன அழகு" },
    description: {
      en: "Clean lines and contemporary profiles that instantly modernise your space.",
      ta: "உங்கள் இடத்தை உடனடியாக நவீனமாக்கும் நேர்த்தியான வடிவமைப்புகள்.",
    },
    icon: Sparkles,
  },
  {
    number: "02",
    title: { en: "Beautiful Lighting", ta: "அழகான விளக்கு அமைப்பு" },
    description: {
      en: "Concealed and cove lighting that sets the perfect mood in every room.",
      ta: "ஒவ்வொரு அறையிலும் சரியான சூழலை உருவாக்கும் மறைவு விளக்கு அமைப்பு.",
    },
    icon: Lightbulb,
  },
  {
    number: "03",
    title: { en: "Custom Designs", ta: "தனிப்பயன் வடிவமைப்புகள்" },
    description: {
      en: "Ceilings designed around your layout, taste and lifestyle.",
      ta: "உங்கள் அமைப்பு, ரசனை மற்றும் வாழ்க்கை முறைக்கேற்ப வடிவமைக்கப்பட்ட சீலிங்.",
    },
    icon: PencilRuler,
  },
  {
    number: "04",
    title: { en: "Premium Finish", ta: "உயர்தர முடிப்பு" },
    description: {
      en: "Smooth, precise finishing with careful attention to every detail.",
      ta: "ஒவ்வொரு விவரத்திலும் கவனத்துடன் மென்மையான, துல்லியமான முடிப்பு.",
    },
    icon: Gem,
  },
];

export interface ProcessStep {
  number: string;
  title: Localized;
  description: Localized;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: { en: "Consultation", ta: "ஆலோசனை" },
    description: {
      en: "Tell us about your space and requirements.",
      ta: "உங்கள் இடம் மற்றும் தேவைகளைப் பற்றி எங்களிடம் கூறுங்கள்.",
    },
  },
  {
    number: "02",
    title: { en: "Design", ta: "வடிவமைப்பு" },
    description: {
      en: "We help you choose a suitable ceiling design.",
      ta: "பொருத்தமான சீலிங் வடிவமைப்பைத் தேர்வு செய்ய உதவுகிறோம்.",
    },
  },
  {
    number: "03",
    title: { en: "Estimate", ta: "மதிப்பீடு" },
    description: {
      en: "Get a clear estimate based on your requirements.",
      ta: "உங்கள் தேவைகளின் அடிப்படையில் தெளிவான மதிப்பீட்டைப் பெறுங்கள்.",
    },
  },
  {
    number: "04",
    title: { en: "Execution", ta: "செயல்படுத்துதல்" },
    description: {
      en: "Our team brings the design to life.",
      ta: "எங்கள் குழு வடிவமைப்பை நனவாக்குகிறது.",
    },
  },
  {
    number: "05",
    title: { en: "Final Finish", ta: "இறுதி முடிப்பு" },
    description: {
      en: "Professional finishing and final inspection.",
      ta: "தொழில்முறை முடிப்பு மற்றும் இறுதிச் சோதனை.",
    },
  },
];

export const whyChoosePoints: Localized[] = [
  { en: "Quality workmanship", ta: "தரமான வேலைத்திறன்" },
  { en: "Custom ceiling designs", ta: "தனிப்பயன் சீலிங் வடிவமைப்புகள்" },
  { en: "Professional finishing", ta: "தொழில்முறை முடிப்பு" },
  { en: "Attention to detail", ta: "நுணுக்கமான கவனம்" },
  { en: "Customer-focused service", ta: "வாடிக்கையாளர் மைய சேவை" },
];
