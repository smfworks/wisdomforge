import Link from "next/link";
import { authorDisplayName, formatSiteUpdated, MICHAEL_NAME } from "@/lib/seo";
import { SITE_UPDATED } from "@/lib/site";

export function Byline({ authors }: { authors: string[] }) {
  const names = (authors.length > 0 ? authors : [MICHAEL_NAME]).map(authorDisplayName);
  return (
    <p className="mt-3 text-sm text-muted">
      By{" "}
      {names.map((name, index) => (
        <span key={`${name}-${index}`}>
          {index > 0 ? (index === names.length - 1 ? " and " : ", ") : null}
          {name === MICHAEL_NAME ? (
            <Link
              href="/about"
              className="text-fg underline decoration-accent decoration-1 underline-offset-2 hover:text-accent"
            >
              {name}
            </Link>
          ) : (
            name
          )}
        </span>
      ))}
      <span className="text-faint"> · </span>
      Updated <time dateTime={SITE_UPDATED}>{formatSiteUpdated()}</time>
    </p>
  );
}
