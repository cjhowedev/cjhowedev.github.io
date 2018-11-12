import 'bootstrap/dist/css/bootstrap.css'
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Container from 'react-bootstrap/lib/Container'
import Helmet from 'react-helmet'
import Header from './header'

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
    render={data => (
      <>
        <Helmet title={data.site.siteMetadata.title}>
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Container>{children}</Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
