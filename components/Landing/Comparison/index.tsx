import classes from "./style.module.scss"
import { H2 } from "../../Text"
import venzel from "../assets/venzel.png"
import ComparisonItem, { IComparisonItem } from "./ComparisonItem"
import { Span30 } from "../../Text/Typography"
import Link from "next/link"

interface IProps {
  bacColor: string
  buttonColor: string
  data: {
    title: string
    comparisons: IComparisonItem[]
  }
}

const Comparison = (props: IProps) => {
  const { data, bacColor, buttonColor } = props

  if (!data) return null
  const { comparisons, title } = data

  return (
    <section className={classes.comparison} style={{ backgroundColor: bacColor }}>
      <H2 className={classes.title}>{title}</H2>
      <div className={classes.vanzel}>
        <img src={venzel} alt='' />
      </div>
      <div>
        {comparisons.map((el, index) => (
          <ComparisonItem key={index} {...el} />
        ))}
      </div>
      <Link href='/#buy'>
        <button className={classes.button} style={{ backgroundColor: buttonColor }}>
          <Span30 className={classes.button_text}>Купить сейчас</Span30>
        </button>
      </Link>
    </section>
  )
}

export default Comparison
