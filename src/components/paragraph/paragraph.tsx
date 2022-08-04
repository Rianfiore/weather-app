import React from "react"

import {ParagraphProps} from "./paragraph.type"

import "./paragraph.scss"

export function Paragraph({children} : ParagraphProps) {
  return (
    <p className="paragraph">
      {children}
    </p>
  )
}