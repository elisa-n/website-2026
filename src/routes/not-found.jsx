import { Link } from "react-router";
import { site } from "../content/site.js";
import { pages } from "../lib/i18n.js";

export const meta = () => [
  { title: `Page not found – ${site.name}` },
  { name: "robots", content: "noindex" },
];

// Shared by both languages, because static hosts serve one 404.html.
export function NotFoundContent() {
  return (
    <>
      <h1 tabIndex={-1}>Page not found</h1>
      <p className="lede">
        This page doesn’t exist or has moved. Check the address, or go to the{" "}
        <Link to={pages.about.en}>home page</Link> or the{" "}
        <Link to={pages.blog.en}>blog</Link>.
      </p>
      <p lang="fi">
        Sivua ei löytynyt. Siirry <Link to={pages.about.fi}>etusivulle</Link>.
      </p>
    </>
  );
}

export default function NotFound() {
  return <NotFoundContent />;
}
