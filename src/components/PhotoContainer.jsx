import React from "react"
import containerStyles from "./PhotoContainer.module.css"

export default class PhotoContainer {
  componentDidMount() {

  }

  render() {
    return (
      <div className={containerStyles.container}>
        <img
          src="https://source.unsplash.com/random/400x200"
          alt="random photo"
        />
      </div>
    );
  }
}
