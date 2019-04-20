import React, { memo, useState, useRef } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import containerStyles from "./PhotoContainer.module.css"
import Filter from "../filter/Filter"

export default memo(function PhotoContainer({
  effectName,
}) {
  const [converted, setConverted] = useState(false)

  const filter = new Filter();

  function handleOnLoad({ target }) {
    console.log(`handleOnLoad`)
    if (!converted) {
      setConverted(true)

      filter.process(target);
    }
  }

  return (
    <StaticQuery
      query={graphql`
        query {
          fileName: file(relativePath: { eq: "images/sample.jpeg" }) {
            childImageSharp {
              fixed(width: 400, height: 250) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={(data) =>
        <div
          className={containerStyles.container}>
          <h4>{effectName}</h4>
          <img
            className='filter-image'
            src={data.fileName.childImageSharp.fixed.src}
            data-effect={effectName.toLowerCase()}
            alt="random"
            onLoad={handleOnLoad}
          />
        </div>
      }
    />
  );
})
