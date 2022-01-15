import classes from "./style.module.scss"
import { IOrder } from "../../../interfaces/order"
import { H2, Span16bold, Span14 } from "../../Text"
import vanzel from "../assets/venzel.png"

interface IProps {
  bacColor: string
  data?: IOrder
}

export default function Order(props: IProps) {
  const { bacColor, data } = props
  if (!data) return null
  const { steps, title } = data

  return (
    <section className={classes.Order} style={{ backgroundColor: bacColor }}>
      <H2 className={classes.title}>{title}</H2>
      <div className={classes.vanzel}>
        <img src={vanzel} alt='' />
      </div>
      <div className={classes.elements}>
        {steps.map((el, index) => (
          <div key={index} className={classes.item}>
            <div className={classes.item_image}>
              <img src={el.img} alt='' />
            </div>
            <div className={classes.item_text}>
              <Span16bold className={classes.item_text_title}>{el.title}</Span16bold>
              <Span14 className={classes.item_text_description}>{el.description}</Span14>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
