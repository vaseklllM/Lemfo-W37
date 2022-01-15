import classes from "./style.module.scss"
import BackTimer from "./BackTimer"
import Price from "./Price"
import { IColors } from ".."
import { IPrice } from "../../../interfaces/ISite"

interface IProps {
  colors: IColors
  price: IPrice
}

export default function PriceAndTimer(props: IProps) {
  const { colors, price } = props
  return (
    <div>
      <div className={classes.PriceAndTimer}>
        <BackTimer greyColor={colors.timerGray} greenColor={colors.title} />
        <div className={classes.hr} style={{ backgroundColor: colors.hr }} />
        <Price price={price} colors={colors} className={classes.price} />
      </div>
    </div>
  )
}

export { Price, BackTimer }
