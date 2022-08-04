import React from "react"

import {TitleProps} from "./title.type"

import "./title.scss"

export function Title({children} : TitleProps) {
  return (
    <h1 className="title">
      {children}
    </h1>
  )
}