import classes from "./style.module.scss"
import { H2, Span14 } from "../../Text"
import vanzel from "../assets/venzel.png"

interface IProps {
  data?: {
    title: string // заголовок
    img: string // картинка описания
    text: string // описание
  }
}

const Description = (props: IProps) => {
  if (!props.data) return null

  const { img, text, title } = props.data

  return (
    <section>
      <div className={classes.title}>
        <H2 className={classes.title_text}>{title}</H2>
      </div>
      <div className={classes.vanzel}>
        <img className={classes.vanzel_img} src={vanzel} alt='' />
      </div>
      <div className={classes.img} style={{ backgroundImage: `url(${img})` }} />
      <div className={classes.text}>
        <Span14>{text}</Span14>
      </div>
    </section>
  )
}

export default Description
