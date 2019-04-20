import React, { useEffect } from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import containerStyles from "./PhotoContainer.module.css"
import Filter from "../filter/Filter"

const filter = new Filter();

export default function PhotoContainer() {
  function handleOnLoad({ target }) {
    filter.process(target);
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
      render={(data) => {
        console.log(data)
        return (
          <div className={containerStyles.container}>
            <Img fixed={data.fileName.childImageSharp.fixed} />
            <img
              className='filter-image'
              src={data.fileName.childImageSharp.fixed.src}
              alt="random"
              onLoad={handleOnLoad}
            />
          </div>
          )
        }
      }
    />
  );
}
