const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/evannichols/_dev/gatsby-typescript-resume/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/evannichols/_dev/gatsby-typescript-resume/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/evannichols/_dev/gatsby-typescript-resume/src/pages/index.js"))),
  "component---src-pages-resume-tsx": hot(preferDefault(require("/Users/evannichols/_dev/gatsby-typescript-resume/src/pages/resume.tsx")))
}

