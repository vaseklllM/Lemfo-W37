import classes from "./style.module.scss"
import { H1 } from "../../Text"

interface IProps {
  name?: string
  backgroundColor: string
}

export default function CompanyName(props: IProps) {
  const { name, backgroundColor } = props

  if (!name) return null

  return (
    <section className={classes.CompanyName} style={{ backgroundColor }}>
      <H1 className={classes.text}>{name}</H1>
    </section>
  )
}
