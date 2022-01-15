import { txt } from "../../../../utils"
import classes from "./style.module.scss"
import { IPrice } from "../../../../interfaces/ISite"
import { Span16, Span14, H2 } from "../../../Text"
import { IColors } from "../.."

interface IProps {
  className?: string
  price: IPrice
  colors: IColors
}

const Price = (props: IProps) => {
  const { className, price, colors } = props
  const { active, prev, procent, valute } = price
  return (
    <div className={txt.join([className, classes.price])}>
      <Span16 className={classes.prevPrice}>
        {prev}
        {valute}
      </Span16>
      <Span14 className={classes.procent} style={{ backgroundColor: colors.orange1 }}>
        {procent}%
      </Span14>
      <H2 style={{ color: colors.orange1 }}>
        {active}
        {valute}
      </H2>
    </div>
  )
}

export default Price
