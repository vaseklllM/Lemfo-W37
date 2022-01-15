import { IFeedbacks } from "../../../interfaces/ISite"
import { txt, arr } from "../../../utils"
import { Span30, Span14 } from "../../Text"
import classes from "./style.module.scss"
import venzel from "../assets/venzel.png"
import { MedalIcon, StarIcon } from "./icons"
import ReviewCarusel from "./ReviewCarusel"

type TProps = {
  data: IFeedbacks
  green: string
  starsColor: string
}

const ProductReviews = (props: TProps) => {
  if (!props.data) return null

  const { green, starsColor } = props
  const { data, title } = props.data

  return (
    <section className={classes.productReviews}>
      <Title title={title} />
      <div className={classes.title_icon}>
        <img src={venzel} alt='' />
      </div>

      <div className={classes.rattingBlock}>
        <div className={classes.rattingBlock_body}>
          <div className={classes.rattingBlock_left}>
            <MedalIcon color={green} className={classes.rattingBlock_left_medalIcon} />
            <Span14 className={classes.rattingBlock_left_text}>Лучший товар года</Span14>
          </div>

          <div className={classes.rattingBlock_vr} />

          <div className={classes.rattingBlock_right}>
            <div className={classes.rattingBlock_right_starts}>
              {arr.getArrByLength(5).map((i) => (
                <StarIcon
                  color={starsColor}
                  className={classes.rattingBlock_right_starts_star}
                  key={i}
                />
              ))}
            </div>
            <Span14 className={classes.rattingBlock_right_text}>
              Средний рейтинг:{" "}
              <span className={classes.rattingBlock_right_text_span}>Отлично</span>
            </Span14>
          </div>
        </div>
      </div>
      <ReviewCarusel className={classes.causel} data={data} green={green} />
    </section>
  )
}

interface PTitleProps {
  title: string
}

function Title(props: PTitleProps) {
  const { title } = props
  const textArr = txt.searchTag(title, "boild")
  return (
    <Span30 className={classes.title}>
      {textArr.map((el, index) => (el.isTeg ? <b key={index}> {el.text} </b> : el.text))}
    </Span30>
  )
}

export default ProductReviews
