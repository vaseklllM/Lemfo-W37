import classes from "./style.module.scss"
import { Span14 } from "../../../Text"

export interface IComparisonItem {
  bad: {
    // плохой вариант
    img: string
    description: string
  }
  nice: {
    // хороший вариант
    img: string
    description: string
  }
}

const ComparisonItem = (props: IComparisonItem) => {
  const { bad, nice } = props

  return (
    <div className={classes.comparison_item}>
      <div className={classes.item}>
        <div className={classes.img}>
          <img className={classes.img_el} src={bad.img} alt='' />
        </div>
        <Span14 className={classes.text}>{bad.description}</Span14>
      </div>
      <div className={classes.item}>
        <div className={classes.img}>
          <img className={classes.img_el} src={nice.img} alt='' />
        </div>
        <Span14 className={classes.text}>{nice.description}</Span14>
      </div>
    </div>
  )
}

export default ComparisonItem
