// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/Users/evannichols/_dev/gatsby-typescript-resume/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/evannichols/_dev/gatsby-typescript-resume/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/evannichols/_dev/gatsby-typescript-resume/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-resume-tsx": () => import("/Users/evannichols/_dev/gatsby-typescript-resume/src/pages/resume.tsx" /* webpackChunkName: "component---src-pages-resume-tsx" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/evannichols/_dev/gatsby-typescript-resume/.cache/data.json")

