import React, { useEffect, useRef } from "react"
import { txt } from "../../../utils"
import classes from "./style.module.scss"

interface Props {
  className?: string
  color?: string
}

export default function Spiner(props: Props) {
  const { className, color } = props

  const ref = useRef(null)

  useEffect(() => {
    if (typeof color === "string") {
      ref.current.style.setProperty("--main-bg-color", color)
    }
  }, [ref])

  const p = {}

  return (
    <div className={txt.join([className, classes.spiner])} ref={ref}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}
