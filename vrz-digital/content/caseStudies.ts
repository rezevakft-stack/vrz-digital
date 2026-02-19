export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  summary: string;
  metrics: { label: string; value: string }[];
  challenge: string;
  approach: string[];
  result: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "tiktok-scaling-ugyfel",
    title: "TikTok Ads skálázás kreatív teszteléssel",
    industry: "eCommerce",
    summary: "Short-form kreatív pipeline + tesztrendszer, amitől a kampány végre tanult és skálázott.",
    metrics: [
      { label: "ROAS", value: "+3,2x" },
      { label: "CPA", value: "-28%" },
      { label: "Kreatív variáció", value: "48/hó" }
    ],
    challenge:
      "Sok megjelenés, kevés stabil konverzió. A kreatívok nem voltak hirdetésre optimalizálva, a tesztelés ad hoc ment.",
    approach: [
      "UGC-szerű kreatív irányok (hook → proof → CTA)",
      "Kreatív tesztelési keretrendszer (heti ritmus, következtetések)",
      "Top kreatívok skálázása + célzási finomhangolás"
    ],
    result:
      "Stabilabb teljesítmény és skálázható kreatív rendszer: kevesebb találgatás, több tanulás és kontroll."
  },
  {
    slug: "meta-google-fullfunnel",
    title: "Meta + Google full-funnel struktúra",
    industry: "SaaS / B2B",
    summary: "Landing + mérés + kampánystruktúra: a csatornák végre összeértek és átlátható lett a teljesítmény.",
    metrics: [
      { label: "Lead", value: "+41%" },
      { label: "CPL", value: "-22%" },
      { label: "Mérés", value: "GA4 + CAPI" }
    ],
    challenge:
      "Széteső csatornák, nehezen összehasonlítható eredmények, gyenge landing konverzió.",
    approach: [
      "Mérés rendbetétele (GA4, események, konverziók)",
      "Landing üzenet–ajánlat összehangolás + CRO audit",
      "Kampányok újrastrukturálása (Search intent + retargeting)"
    ],
    result:
      "Átláthatóbb funnel és jobb konverzió: a büdzsé ott dolgozik, ahol tényleg hoz ügyfelet."
  }
];
