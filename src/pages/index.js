import React from "react"
import Layout from "../components/Layout"
import PhotoList from "../components/PhotoList";

export default () => (
  <Layout>
    <div style={{ color: `purple` }}>
      <h1>Hello Gatsby!</h1>
      <p>What a world.</p>
      <PhotoList/>
    </div>
  </Layout>
)
