import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>About</h1>
        <p>
          <a href={data.site.siteMetadata.productionURL}>{data.site.siteMetadata.title}</a> is
          a weekend project by <a href="https://kenju.netlify.com">Ken</a>.
        </p>
        <p>
          The main motivatin is ... just for fun 😂.
          I wanted to understand how image processing works, how image effect works, and how to manipulate image pixels via JavaScript & Canvas.
        </p>
        <p>
          If you would like to follow or file an issue, please visit <a href="https://github.com/kenju/pixel-filter">github.com/kenju/pixel-filter</a>.
        </p>
        <p>
          NOTE: this project was initially developed under <a href="https://github.com/kenju/instagram_js_filter">github.com/kenju/instagram_js_filter</a>.
        </p>
        <h2>Technology Stacks</h2>
        <h3>Static Page Hosting</h3>
        <ul>
          <li>React</li>
          <li>GraphQL</li>
          <li>Gatsby</li>
          <li>Netlify</li>
        </ul>
        <h2>Supported Effects</h2>
        <h3>Basic Effects</h3>
        <ul>
          <li>grayscale</li>
          <li>sepia</li>
          <li>luminance</li>
          <li>brighten</li>
          <li>darken</li>
          <li>opacity</li>
          <li>negaposi</li>
          <li>brightnessContrast</li>
          <li>huerotate</li>
          <li>saturate</li>
          <li>horizontalFlip</li>
          <li>verticalFlip</li>
          <li>doubleFlip</li>
          <li>horizontalMirror</li>
          <li>verticalMirror</li>
          <li>XYMirror</li>
        </ul>
        <h3>Instagram-like Effects</h3>
        <ul>
          <li> lark</li>
          <li> reyes</li>
          <li> juno</li>
          <li> slumber</li>
          <li> crema</li>
          <li> ludwig</li>
          <li> aden</li>
          <li> perpetua</li>
          <li> amaro</li>
          <li> mayfair</li>
          <li> rise</li>
          <li> hudson</li>
          <li> valencia</li>
          <li> xpro2</li>
          <li> sierra</li>
          <li> willow</li>
          <li> lofi</li>
          <li> earlybird</li>
          <li> brannan</li>
          <li> inkwell</li>
          <li> hefe</li>
          <li> nashville</li>
          <li> sutro</li>
          <li> toaster</li>
          <li> walden</li>
          <li> nineteenSeventySeven</li>
          <li> kelvin</li>
        </ul>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        productionURL
      }
    }
  }
`
