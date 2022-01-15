import classes from "./style.module.scss"
import { Span14 } from "../../Text"
import { IColors } from ".."
import { SequrityIcon } from "../icons"

interface IProps {
  colors: IColors
}

export default function RemainingForThePromotionRow(props: IProps) {
  const { colors } = props
  return (
    <div className={classes.RemainingForThePromotionRow}>
      <div className={classes.sequre}>
        <SequrityIcon color={colors.green} className={classes.sequreicon} />
        <Span14 className={classes.sequre_text}>Защита покупателя</Span14>
      </div>
      <div className={classes.vertical_hr} />
      <div className={classes.timeLineBlock}>
        <Span14>
          Осталось по акции: <span style={{ color: colors.orange }}>Немного</span>
        </Span14>
        <div className={classes.timeLine}>
          <div
            className={classes.timeLine_line}
            style={{ backgroundColor: colors.blue }}
          ></div>
        </div>
      </div>
    </div>
  )
}
