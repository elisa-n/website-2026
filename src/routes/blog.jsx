import { Link } from "react-router";
import { listPosts } from "../lib/posts.server.js";
import { text } from "../content/text.js";
import { formatDate } from "../lib/format.js";
import { getLocale, useLocale } from "../lib/i18n.js";
import { seo } from "../lib/seo.js";

export function loader({ request }) {
  return listPosts(getLocale(new URL(request.url).pathname));
}

export const meta = ({ location }) => {
  const locale = getLocale(location.pathname);
  const t = text[locale].blog;
  return seo({ locale, page: "blog", title: t.title, description: t.lede });
};

export default function Blog({ loaderData: posts }) {
  const locale = useLocale();
  const { dateLocale } = text[locale];
  const t = text[locale].blog;

  return (
    <>
      <h1 tabIndex={-1}>{t.title}</h1>
      {/* <p className="lede">{t.lede}</p>

      {posts.length === 0 ? (
        <p>{t.empty}</p>
      ) : (
        <ul className="post-list">
          {posts.map((post) => {
            // Posts without a version in this language link to the one they
            // have; `lang` makes screen readers switch voice for them.
            const otherLang = post.lang === locale ? undefined : post.lang;
            return (
              <li key={post.slug}>
                <h2 lang={otherLang}>
                  <Link to={post.path} hrefLang={otherLang}>
                    {post.title}
                  </Link>
                </h2>
                {(post.date || otherLang) && (
                  <p className="meta">
                    {post.date && (
                      <time dateTime={post.date}>
                        {formatDate(post.date, dateLocale)}
                      </time>
                    )}
                    {otherLang && (
                      <span className="tag">{t.languageOnly[otherLang]}</span>
                    )}
                  </p>
                )}
                {post.summary && <p lang={otherLang}>{post.summary}</p>}
              </li>
            );
          })}
        </ul>
      )} */}
    </>
  );
}
