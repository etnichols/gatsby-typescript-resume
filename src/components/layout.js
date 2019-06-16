import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-link'

import './layout.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      const { title } = data.site.siteMetadata
      return (
        <>
          <div className="container">
            <main>
              <Link to="/" css={{ display: `inline-block` }}>
                <h1 className="site-title">{title}</h1>
              </Link>
              <hr />
              {children}
            </main>
            <footer>
              <div>
                {`© ${new Date().getFullYear()} ${title}`}
              </div>
            </footer>
          </div>
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
