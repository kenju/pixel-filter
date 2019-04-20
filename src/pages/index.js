import React from "react"
import Layout from "../components/Layout"
import PhotoContainer from "../components/PhotoContainer";

export default () => (
  <Layout>
    <div style={{ color: `purple` }}>
      <h1>Hello Gatsby!</h1>
      <p>What a world.</p>
      <PhotoContainer/>
    </div>
  </Layout>
)
