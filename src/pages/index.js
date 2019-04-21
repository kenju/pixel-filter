import React from "react"
import Layout from "../components/Layout"
import PhotoList from "../components/PhotoList";

export default ({ data }) => (
  <Layout>
    <div style={{ color: `purple` }}>
      <h1>{data.site.siteMetadata.title}</h1>
      <p>
        Created by <a href="https://kenju.netlify.com">Ken</a> from Japan
      </p>
      <PhotoList/>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
