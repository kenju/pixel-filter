import React, { useEffect } from "react"
import containerStyles from "./PhotoContainer.module.css"
import Filter from "../filter/filter"

const filter = new Filter();

export default function PhotoContainer() {
  function handleOnLoad({ target }) {
    console.log(target)
    filter.process(target);
  }

  return (
    <div className={containerStyles.container}>
      <img
        className='filter-image'
        src="https://source.unsplash.com/random/400x200"
        alt="random"
        onLoad={handleOnLoad}
      />
    </div>
  );
}
