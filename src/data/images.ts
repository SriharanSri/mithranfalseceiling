// Centralized non-gallery images (hero, before/after, feature shots).
// Replace these URLs with local assets in src/assets/images/... when ready.

const u = (id: string, w: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const heroImage = {
  src: u("1618221195710-dd6b41faaea6", 1920),
  alt: "Premium false ceiling with warm concealed lighting in a modern living room",
};

export const whyChooseImage = {
  src: u("1600210492486-724fe5c67fb0", 1100),
  alt: "Elegant living room with layered gypsum false ceiling",
};

// Before/after uses the same framing so the slider comparison reads clearly.
export const beforeAfter = {
  before: {
    src: u("1505691938895-1758d7feb511", 1400),
    alt: "Plain room before false ceiling installation",
  },
  after: {
    src: u("1618221195710-dd6b41faaea6", 1400),
    alt: "Same room after premium false ceiling installation",
  },
};
