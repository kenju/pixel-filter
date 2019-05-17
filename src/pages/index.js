import React from "react"
import Layout from "../components/Layout"
import PhotoList from "../components/PhotoList";

export default ({ data }) => (
  <Layout>
    <div style={{ color: `purple` }}>
      <p>
        Created by <a href="https://kenju.netlify.com">Kenju</a>
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
