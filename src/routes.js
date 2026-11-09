import { index, route } from "@react-router/dev/routes";
import { postLanguages } from "./lib/post-files.js";

// Every page is prerendered, and a post route with no posts to prerender
// fails the build, so each language's post route exists only when that
// language has at least one post.
const hasPosts = postLanguages();

// English and Finnish pages share the same route modules; each page reads
// its language from the URL.
export default [
  index("routes/about.jsx", { id: "about-en" }),
  route("blog", "routes/blog.jsx", { id: "blog-en" }),
  ...(hasPosts.has("en")
    ? [route("blog/:slug", "routes/post.jsx", { id: "post-en" })]
    : []),
  route("experience", "routes/experience.jsx", { id: "experience-en" }),
  route("contact", "routes/contact.jsx", { id: "contact-en" }),

  route("fi", "routes/about.jsx", { id: "about-fi" }),
  route("fi/blogi", "routes/blog.jsx", { id: "blog-fi" }),
  ...(hasPosts.has("fi")
    ? [route("fi/blogi/:slug", "routes/post.jsx", { id: "post-fi" })]
    : []),
  route("fi/kokemus", "routes/experience.jsx", { id: "experience-fi" }),
  route("fi/yhteystiedot", "routes/contact.jsx", { id: "contact-fi" }),

  route("sitemap.xml", "routes/sitemap.js"),
  route("robots.txt", "routes/robots.js"),
  route("*", "routes/not-found.jsx"),
];
