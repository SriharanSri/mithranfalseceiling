// Gallery data. Add or replace items here without touching component code.
// Swap `image` URLs for local assets in src/assets/images/... when ready.

import type { Localized } from "../i18n/context";

export type CeilingCategory =
  | "Gypsum"
  | "PVC"
  | "Cornish"
  | "2×2 Grid"
  | "Living Room"
  | "Bedroom"
  | "Commercial";

export interface CeilingProject {
  id: string;
  title: Localized;
  category: CeilingCategory;
  image: string;
}

// Stable high-quality placeholder images (replace with real project photos).
const img = (id: string, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const ceilingFilters: Array<"All" | CeilingCategory> = [
  "All",
  "Gypsum",
  "PVC",
  "Cornish",
  "2×2 Grid",
  "Living Room",
  "Bedroom",
  "Commercial",
];

// Display labels per category (the category key itself stays English for filtering).
export const categoryLabels: Record<CeilingCategory, Localized> = {
  Gypsum: { en: "Gypsum", ta: "ஜிப்சம்" },
  PVC: { en: "PVC", ta: "பி.வி.சி" },
  Cornish: { en: "Cornish", ta: "கார்னிஷ்" },
  "2×2 Grid": { en: "2×2 Grid", ta: "2×2 கிரிட்" },
  "Living Room": { en: "Living Room", ta: "வரவேற்பறை" },
  Bedroom: { en: "Bedroom", ta: "படுக்கையறை" },
  Commercial: { en: "Commercial", ta: "வணிக" },
};

export const ceilingProjects: CeilingProject[] = [
  {
    id: "gyp-1",
    title: { en: "Modern Gypsum Ceiling", ta: "நவீன ஜிப்சம் சீலிங்" },
    category: "Gypsum",
    image: img("1618221195710-dd6b41faaea6"),
  },
  {
    id: "liv-1",
    title: { en: "Living Room Cove Lighting", ta: "வரவேற்பறை கோவ் விளக்கு" },
    category: "Living Room",
    image: img("1600210492486-724fe5c67fb0"),
  },
  {
    id: "bed-1",
    title: { en: "Warm Bedroom Ceiling", ta: "அழகிய படுக்கையறை சீலிங்" },
    category: "Bedroom",
    image: img("1616594039964-ae9021a400a0"),
  },
  {
    id: "pvc-1",
    title: { en: "PVC Panel Ceiling", ta: "பி.வி.சி பேனல் சீலிங்" },
    category: "PVC",
    image: img("1600566753086-00f18fb6b3ea"),
  },
  {
    id: "com-1",
    title: { en: "Commercial Office Ceiling", ta: "வணிக அலுவலக சீலிங்" },
    category: "Commercial",
    image: img("1497366216548-37526070297c"),
  },
  {
    id: "cor-1",
    title: { en: "Cornish Profile Detail", ta: "கார்னிஷ் வடிவ விவரம்" },
    category: "Cornish",
    image: img("1600607687939-ce8a6c25118c"),
  },
  {
    id: "grid-1",
    title: { en: "2×2 Grid Ceiling", ta: "2×2 கிரிட் சீலிங்" },
    category: "2×2 Grid",
    image: img("1524758631624-e2822e304c36"),
  },
  {
    id: "gyp-2",
    title: { en: "Layered Gypsum Design", ta: "அடுக்கு ஜிப்சம் வடிவமைப்பு" },
    category: "Gypsum",
    image: img("1600566752355-35792bedcfea"),
  },
  {
    id: "liv-2",
    title: { en: "Recessed Living Ceiling", ta: "உள்ளமைந்த வரவேற்பறை சீலிங்" },
    category: "Living Room",
    image: img("1618219740975-d40978bb7378"),
  },
  {
    id: "bed-2",
    title: { en: "Minimal Bedroom Ceiling", ta: "எளிமையான படுக்கையறை சீலிங்" },
    category: "Bedroom",
    image: img("1617103996702-96ff29b1c467"),
  },
  {
    id: "com-2",
    title: { en: "Retail Space Ceiling", ta: "கடை இட சீலிங்" },
    category: "Commercial",
    image: img("1604014237800-1c9102c219da"),
  },
  {
    id: "pvc-2",
    title: { en: "Textured PVC Ceiling", ta: "வடிவமைப்பு பி.வி.சி சீலிங்" },
    category: "PVC",
    image: img("1595428774223-ef52624120d2"),
  },
];

// Large showcase images for the masonry project gallery.
export const showcaseImages: Array<{
  id: string;
  image: string;
  alt: string;
  tall?: boolean;
}> = [
  {
    id: "s1",
    image: img("1618221195710-dd6b41faaea6", 1100),
    alt: "Modern false ceiling with concealed lighting",
    tall: true,
  },
  {
    id: "s2",
    image: img("1600210492486-724fe5c67fb0", 900),
    alt: "Living room with layered gypsum ceiling",
  },
  {
    id: "s3",
    image: img("1616594039964-ae9021a400a0", 900),
    alt: "Bedroom with warm cove lighting",
  },
  {
    id: "s4",
    image: img("1600566753086-00f18fb6b3ea", 900),
    alt: "PVC ceiling panels",
    tall: true,
  },
  {
    id: "s5",
    image: img("1600607687939-ce8a6c25118c", 900),
    alt: "Cornish ceiling profile detail",
  },
  {
    id: "s6",
    image: img("1618219740975-d40978bb7378", 1100),
    alt: "TV wall with recessed ceiling lighting",
  },
];
