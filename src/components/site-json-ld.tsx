import { ORG_NAME, SITE_NAME, SITE_ORIGIN, SITE_UPDATED } from "@/lib/site";

const description =
  "A parent-operated academy for education in the age of AI. Four age bands, every subject, responsible autonomous AI use woven through the sitting.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_ORIGIN}/#organization`,
      name: ORG_NAME,
      url: SITE_ORIGIN,
      email: "michael@smfworks.com",
      description: `${ORG_NAME} publishes ${SITE_NAME}, a parent-operated academy for education in the age of AI.`,
      founder: { "@id": `${SITE_ORIGIN}/#founder` },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_ORIGIN}/#website`,
      name: SITE_NAME,
      url: SITE_ORIGIN,
      description,
      publisher: { "@id": `${SITE_ORIGIN}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_ORIGIN}/#webpage`,
      url: SITE_ORIGIN,
      name: `${SITE_NAME} — Education in the Age of AI`,
      description,
      isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
      about: { "@id": `${SITE_ORIGIN}/#organization` },
      dateModified: SITE_UPDATED,
      inLanguage: "en",
    },
    {
      "@type": "Person",
      "@id": `${SITE_ORIGIN}/#founder`,
      name: "Michael Gannotti",
      jobTitle: "Principal AI Solutions Engineer",
      url: `${SITE_ORIGIN}/about`,
      email: "mailto:michael@smfworks.com",
    },
  ],
};

/** Site-wide structured data. Rendered from the root layout so the homepage HTML includes it. */
export function SiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
