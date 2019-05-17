import React from "react"
import { Helmet } from "react-helmet"
import { Link, StaticQuery, graphql } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({
  children,
}) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{data.site.siteMetadata.title}</title>
          <link rel="canonical" href="https://kenju.github.io/pixel-filter" />
        </Helmet>

        <header style={{ marginBottom: `1.5rem` }}>
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <h1 style={{ display: `inline` }}>
              {data.site.siteMetadata.title}
            </h1>
          </Link>
          <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">About</ListLink>
          </ul>
        </header>
        {children}
      </div>
    )}
  />
)
