/**
 * Every fact, award and quotation on the site must reference one of these URLs.
 * `dreAbout` currently points to the DRE Homes homepage (which links to About Us / Management);
 * replace it with the exact About / management-profile URL once confirmed.
 */
export const sources = {
  dreHome: "https://www.drehomes.com/",
  dreAbout: "https://www.drehomes.com/",
  gulfNewsPersonalised:
    "https://gulfnews.com/gn-focus/for-dre-its-all-about-staying-focused-on-personalised-service-1.1727687083694",
  gulfNewsBlackOnyx:
    "https://gulfnews.com/gn-focus/dre-awarded-prestigious-black-onyx-platinum-award-by-dubai-holdings-1.1727429139243",
  propertyTime: "https://www.propertytime.ae/featured/trust-transparency-dres-18-year-old-legacy/",
  khaleejTimesDre:
    "https://www.khaleejtimes.com/uae/from-ice-cream-scoops-to-skyscrapers-how-dubai-woman-built-business-selling-properties-worth-billio",
  estateMagazine: "https://estatemagazine.ae/kurat-ul-ain-inspires-success-in-dubai-real/",
} as const;
