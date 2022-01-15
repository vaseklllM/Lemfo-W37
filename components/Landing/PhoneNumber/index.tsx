import { Span24 } from "../../Text"
import classes from "./style.module.scss"
// import { Span24 } from "../../../Text"

interface IProps {
  children: string
}

export default function PhoneNumber(props: IProps) {
  return <Span24 className={classes.PhoneNumber}>{props.children}</Span24>
}
