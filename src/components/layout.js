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
          <link rel="canonical" href="https://kenju.github.io/gatsby-sample" />
        </Helmet>

        <header style={{ marginBottom: `1.5rem` }}>
          <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <h3 style={{ display: `inline` }}>
              {data.site.siteMetadata.title}
            </h3>
          </Link>
          <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
            <ListLink to="/about-css-modules/">About CSS Modules</ListLink>
            <ListLink to="/my-files/">My Files</ListLink>
            <ListLink to="/posts/">Posts</ListLink>
          </ul>
        </header>
        {children}
      </div>
    )}
  />
)
