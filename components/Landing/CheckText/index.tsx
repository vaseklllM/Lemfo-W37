import { CheckCircleIcon } from "../icons"
import classes from "./style.module.scss"
import { ReactChild } from "react"
import { txt } from "../../../utils"
import { Span14 } from "../../Text"

interface IProps {
  color: string
  children: ReactChild
  className?: string
}

function CheckText(props: IProps) {
  const { color, children, className } = props

  return (
    <div className={txt.join([classes.checkText, className])}>
      <CheckCircleIcon color={color} className={classes.icon} />
      {typeof children === "string" ? (
        <Span14 className={classes.text}>{children}</Span14>
      ) : (
        children
      )}
    </div>
  )
}

export default CheckText
