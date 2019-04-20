import React from "react"
import containerStyles from "./PhotoContainer.module.css"
// import * as Filter from "../filter/filter"

export default function PhotoContainer() {
  return (
    <div className={containerStyles.container}>
      <img
        className='filter-image'
        src="https://source.unsplash.com/random/400x200"
        alt="random"
      />
    </div>
  );
}
