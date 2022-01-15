import classes from "./style.module.scss"
// import { H4, Span14 } from "../../Text"
import { Staricon } from "../icons"
import { IColors } from ".."
import { H4, Span14 } from "../../Text"

interface IProps {
  name: string
  img: string
  colors: IColors
}

export default function ProductImageBlock(props: IProps) {
  const { img, name, colors } = props

  return (
    <section>
      <div className={classes.title_block} style={{ backgroundColor: colors.grey }}>
        <H4 className={classes.title}>{name}</H4>
      </div>
      <div className={classes.img} style={{ backgroundImage: `url(${img})` }} />
      <div className={classes.ratting} style={{ backgroundColor: colors.grey1 }}>
        <Staricon color={colors.orange} className={classes.star} />
        <Staricon color={colors.orange} className={classes.star} />
        <Staricon color={colors.orange} className={classes.star} />
        <Staricon color={colors.orange} className={classes.star} />
        <Staricon color={colors.orange} className={classes.star} />
        <Span14 className={classes.leftText}>
          голосов "За":
          <Span14 className={classes.vote} style={{ color: colors.textGreenColor }}>
            Много
          </Span14>
        </Span14>
        <div style={{ backgroundColor: colors.hr }} className={classes.hr}></div>
        <Span14 className={classes.rightText}>
          заказов:
          <Span14 className={classes.vote} style={{ color: colors.textGreenColor }}>
            Много
          </Span14>
        </Span14>
      </div>
    </section>
  )
}
