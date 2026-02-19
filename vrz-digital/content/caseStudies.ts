export type CaseStudy = {
  slug: string; title: string; industry: string; summary: string;
  metrics: { label: string; value: string }[];
  challenge: string; approach: string[]; result: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "tiktok-scaling-ugyfel",
    title: "TikTok skálázás kreatív teszteléssel",
    industry: "eCommerce",
    summary: "Kreatív pipeline + tesztrendszer → stabilabb teljesítmény és skálázhatóság.",
    metrics: [{label:"ROAS",value:"+3,2x"},{label:"CPA",value:"-28%"},{label:"Kreatív",value:"48/hó"}],
    challenge: "Sok megjelenés, kevés stabil konverzió. Nem volt ritmus a kreatív tesztelésben.",
    approach: ["Hook → proof → CTA keret","Heti tesztciklus + tanulságok","Top kreatívok skálázása + célzási finomhangolás"],
    result: "Kevesebb találgatás, több kontroll. Stabilabb kampány és működő kreatív rendszer."
  },
  {
    slug: "meta-google-fullfunnel",
    title: "Meta + Google: full-funnel rendrakás",
    industry: "SaaS / B2B",
    summary: "Mérés + landing + kampánystruktúra: a csatornák végre összeértek.",
    metrics: [{label:"Lead",value:"+41%"},{label:"CPL",value:"-22%"},{label:"Mérés",value:"GA4+CAPI"}],
    challenge: "Széteső csatornák és gyenge landing konverzió. Nehéz volt tisztán látni, mi hoz eredményt.",
    approach: ["Konverziók és események rendbetétele","Landing üzenet–ajánlat hangolás + CRO","Search intent + retargeting újrastruktúrázás"],
    result: "Átláthatóbb funnel, jobb konverzió. A büdzsé ott dolgozik, ahol tényleg hoz ügyfelet."
  }
];
