import React from "react"
import containerStyles from "./PhotoContainer.module.css"

export default function PhotoContainer({}) {
  return (
    <div className={containerStyles.container}>
      <img
        src="https://source.unsplash.com/random/400x200"
        alt="random photo"
      />
    </div>
  );
}
