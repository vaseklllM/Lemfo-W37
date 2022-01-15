import classes from "./style.module.scss"
import RemainingForThePromotionRow from "../RemainingForThePromotionRow"
import PriceAndTimer from "../PriceAndTimer"
import { IColors } from ".."
import CheckText from "../CheckText"
import { Span30 } from "../../Text"
import { IPrice } from "../../../interfaces/ISite"
import Link from "next/link"

interface IProps {
  colors: IColors
  price: IPrice
  advantages: string[]
}

export default function BackTimerFirstSection(props: IProps) {
  const { colors, price, advantages } = props

  if (!price || !advantages) return null

  return (
    <section className={classes.BackTimerFirstSection}>
      <div className={classes.body}>
        <div>
          {advantages.map((el, index) => (
            <CheckText
              className={classes.adventages_item}
              key={index}
              color={colors.title}
            >
              {el}
            </CheckText>
          ))}
        </div>
        <PriceAndTimer colors={colors} price={price} />
        <Link href='/#buy'>
          <a className={classes.button_buy} style={{ backgroundColor: colors.orange }}>
            <Span30>Купить сейчас</Span30>
          </a>
        </Link>
        <RemainingForThePromotionRow colors={colors} />
      </div>
    </section>
  )
}
