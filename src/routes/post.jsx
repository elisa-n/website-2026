import { Link, data } from "react-router";
import Markdown from "react-markdown";
import { getPost, getVersions } from "../lib/posts.server.js";
import { text } from "../content/text.js";
import { formatDate } from "../lib/format.js";
import { getLocale, pages } from "../lib/i18n.js";
import { seo } from "../lib/seo.js";
import { NotFoundContent } from "./not-found.jsx";

export function loader({ params, request }) {
  const lang = getLocale(new URL(request.url).pathname);
  const post = getPost(params.slug, lang);
  if (!post) throw data(null, { status: 404 });
  // `versions` also tells the header's language link where the translation is.
  return { ...post, versions: getVersions(post.slug) };
}

export const meta = ({ loaderData: post }) =>
  post
    ? seo({
        locale: post.lang,
        alternates: post.versions,
        title: post.title,
        description: post.summary,
        type: "article",
        extra: post.date
          ? [{ property: "article:published_time", content: post.date }]
          : [],
      })
    : [];

// Post bodies start at h2, since the post title is the page's h1.
// eslint-disable-next-line no-unused-vars
const components = { h1: ({ node, ...props }) => <h2 {...props} /> };

export default function Post({ loaderData: post }) {
  const t = text[post.lang];

  return (
    <article>
      <p className="back-link">
        <Link to={pages.blog[post.lang]}>{t.blog.allPosts}</Link>
      </p>
      <h1 tabIndex={-1}>{post.title}</h1>
      {post.date && (
        <p className="meta">
          <time dateTime={post.date}>{formatDate(post.date, t.dateLocale)}</time>
        </p>
      )}
      <div className="prose">
        <Markdown components={components}>{post.body}</Markdown>
      </div>
    </article>
  );
}

export function ErrorBoundary() {
  return <NotFoundContent />;
}
