// Centralized business information. Update these values in one place.

const RAW_PHONE = "7604962528";
const COUNTRY_CODE = "91";

export const business = {
  name: "Mithran Interior Works",
  nameLines: ["MITHRAN", "INTERIOR WORKS"] as const,
  tagline: "False Ceiling & Interior Works",
  focus: "False Ceiling Specialists",
  phoneDisplay: RAW_PHONE,
  phoneTel: `tel:+${COUNTRY_CODE}${RAW_PHONE}`,
  whatsapp: `https://wa.me/${COUNTRY_CODE}${RAW_PHONE}?text=${encodeURIComponent(
    "Hi Mithran Interior Works, I'm interested in false ceiling work. I'd like to get a quotation.",
  )}`,
  instagramHandle: "@mithran_interior_works",
  instagramUrl: "https://www.instagram.com/mithran_interior_works/",
  location: "Manamadurai, Sivaganga, Tamil Nadu",
  locationShort: "Manamadurai, Sivaganga",
} as const;
