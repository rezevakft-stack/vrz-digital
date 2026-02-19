import { site } from "@/lib/site";
import { caseStudies } from "@/content/caseStudies";

export default function sitemap() {
  const base = `https://${site.domain}`;
  const staticRoutes = ["", "/szolgaltatasok", "/esettanulmanyok", "/rolunk", "/kapcsolat"];
  return [
    ...staticRoutes.map((p) => ({ url: `${base}${p}`, lastModified: new Date() })),
    ...caseStudies.map((c) => ({ url: `${base}/esettanulmanyok/${c.slug}`, lastModified: new Date() }))
  ];
}
