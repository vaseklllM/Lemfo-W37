import Slider from "react-slick"
import classes from "./style.module.scss"
import { IFeedback } from "../../../../interfaces/ISite"
import { Img } from "../../../Img"
import { txt } from "../../../../utils"
import { ArrowIcon, QuoteIcon } from "./icons"
import { P14, Span14bold } from "../../../Text"

interface IProps {
  data: IFeedback[]
  green: string
  className?: string
}

const ReviewCarusel = (props: IProps) => {
  const { data, green, className } = props

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <div className={txt.join([classes.ReviewCarusel, className])}>
      <Slider {...settings}>
        {data.map((el, index) => (
          <div key={index} className={classes.item}>
            <div className={classes.item_body}>
              <Img src={el.img} className={classes.item_img} />
              <P14 className={classes.item_feedback}>{el.feedback}</P14>

              <QuoteIcon className={classes.item_quote} color={green} />
              <Span14bold className={classes.item_name}>{el.name}</Span14bold>
              <P14 className={classes.item_year}>
                {el.city}, {el.yearsOld}
              </P14>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

function SamplePrevArrow(props) {
  return (
    <div className={txt.join([classes.arrow, classes.arrowLeft])} onClick={props.onClick}>
      <ArrowIcon className={classes.arrow_leftIcon} />
    </div>
  )
}

function SampleNextArrow(props) {
  return (
    <div
      className={txt.join([classes.arrow, classes.arrowRight])}
      onClick={props.onClick}
    >
      <ArrowIcon className={classes.arrow_rightIcon} />
    </div>
  )
}

export default ReviewCarusel
