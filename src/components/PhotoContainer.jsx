import React from "react"
import containerStyles from "./container.module.css"

export default function PhotoContainer({}) {
  return (
    <div className={containerStyles.container}>
      {children}
    </div>
  );
}
