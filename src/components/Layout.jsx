import React from "react"
import { Helmet } from "react-helmet"
import { Link, StaticQuery, graphql } from "gatsby"
import favicon16 from "../favicons/favicon-16x16.png";
import favicon32 from "../favicons/favicon-32x32.png";
import favicon from "../favicons/favicon.ico";

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
            productionURL
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
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
          <link rel="shortcut icon" type="image/png" href={favicon} />
        </Helmet>

        <header style={{ marginBottom: `1.5rem` }}>
          <a href={data.site.siteMetadata.productionURL} style={{ textShadow: `none`, backgroundImage: `none` }}>
            <h1 style={{ display: `inline` }}>
              {data.site.siteMetadata.title}
            </h1>
          </a>
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
