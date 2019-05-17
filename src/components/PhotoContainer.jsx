import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby"

import containerStyles from "./PhotoContainer.module.css"
import Filter from "../filter/Filter"

export default function PhotoContainer({
  effectName,
}) {
  const [converted, setConverted] = useState(false)

  const filter = new Filter();

  function handleOnLoad({ target }) {
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
          className={containerStyles.PhotoContainer}>
          <h4>{effectName}</h4>
          <div className={containerStyles.PhotoContainerImage}>
            <img
              className='filter-image'
              src={data.fileName.childImageSharp.fixed.src}
              data-effect={effectName.toLowerCase()}
              alt="random"
              onLoad={handleOnLoad}
            />
          </div>
        </div>
      }
    />
  );
}
