/**
 * JSON-LD script. Native script, not next/script: the payload is data, not code.
 * `<` is escaped so a string in the graph cannot close the script tag.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
