export type Service = { title: string; desc: string; highlights: string[] };

export const services: Service[] = [
  {
    title: "Videógyártás (UGC / short-form / reklám)",
    desc: "Hirdetésre tervezett videók: hook, ritmus, felirat, proof, CTA. Nem dísz – motor.",
    highlights: ["TikTok & Reels fókusz","Gyors iteráció","Kreatív könyvtár"]
  },
  {
    title: "TikTok Ads (teszt → tanulság → skála)",
    desc: "Struktúra, kreatív rotáció, Spark/UGC, skálázás. A TikTok nálunk nem “plusz csatorna”.",
    highlights: ["Tesztelési rendszer","Skálázási playbook","Kreatív-first"]
  },
  {
    title: "Meta Ads (Facebook/Instagram)",
    desc: "Kampányrendszer + kreatív pipeline. A cél: stabil teljesítmény, nem hullámvasút.",
    highlights: ["CAPI/Pixel","Retargeting logika","Folyamatos optimalizálás"]
  },
  {
    title: "Google Ads (Search / PMax)",
    desc: "Szándék alapú forgalom, tiszta struktúra, jó landing illesztés. Mérhetően.",
    highlights: ["Search","PMax","Mérés rendben"]
  },
  {
    title: "CRO + landing oldalak",
    desc: "A kattintás nem eredmény. Konverziós audit, gyors javítások, A/B terv.",
    highlights: ["Gyors audit","Konverziós UX","Teszt terv"]
  },
  {
    title: "SEO + email automatizmusok",
    desc: "Alapok rendbe, hogy ne csak hirdetésből éljen a rendszer. Automatizmusokkal rásegítünk.",
    highlights: ["Technikai SEO","Szegmentálás","Nurture flow-k"]
  }
];
