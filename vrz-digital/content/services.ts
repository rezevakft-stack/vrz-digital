export type Service = {
  title: string;
  desc: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    title: "Videógyártás (UGC / reklám / kreatív)",
    desc: "Short-form videók, hirdetésre optimalizált kreatívok, forgatókönyv–vágás–feliratozás teljesen kézben tartva.",
    highlights: ["TikTok & Reels first", "Kampányhoz tervezve", "Gyors iterációk"]
  },
  {
    title: "TikTok Ads + kreatív stratégia",
    desc: "Struktúra, tesztelés, kreatív variációk, célzás és skálázás – nem csak „megy a hirdetés”, hanem tanul és nő.",
    highlights: ["Creative testing rendszer", "Spark Ads/UGC", "Skálázási playbook"]
  },
  {
    title: "Meta Ads (Facebook/Instagram)",
    desc: "Kampányrendszer felépítés, konverzió-optimalizálás, kreatív pipeline és teljesítmény riporting.",
    highlights: ["ROAS fókusz", "CAPI/Pixel setup", "Folyamatos optimalizálás"]
  },
  {
    title: "Google Ads (Search / PMax)",
    desc: "Szándék alapú forgalom és performance. Strukturált fiók, landing megfeleltetés, mérés és minőség.",
    highlights: ["Keresési kampányok", "PMax", "Mérés rendben"]
  },
  {
    title: "CRO + landing oldalak",
    desc: "Nem csak kattintás kell: konverzió. Üzenet–ajánlat–oldal összehangolás és A/B teszt logika.",
    highlights: ["Gyors audit", "Konverziós UX", "A/B teszt terv"]
  },
  {
    title: "SEO + tartalom alapok",
    desc: "Technikai és on-page rendbetétel, hogy hosszú távon is jöjjön organikus érdeklődő (blog nélkül is lehet okosan).",
    highlights: ["Technikai SEO", "On-page", "Local / brand search"]
  },
  {
    title: "Email marketing + automatizmusok",
    desc: "Feliratkozó → ügyfél: lead magnet, nurture, ajánlatok és visszacsábítás. Szép, tiszta rendszerben.",
    highlights: ["Automatizmusok", "Szegmentálás", "Konverziókövetés"]
  }
];
