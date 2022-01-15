import classes from "./style.module.scss"
import { Span30, H3, P14 } from "../../Text"
import { txt } from "../../../utils"
import vanzel from "../assets/venzel.png"
import { Img } from "../../Img"

interface IProps {
  data?: {
    title: string // описание блока инструкции
    steps: IInstructionStep[]
  }
}

interface IInstructionStep {
  img: string
  description: string
}

function Instruction(props: IProps) {
  if (!props.data) return null
  const { steps, title } = props.data

  return (
    <section>
      <Title title={title} />
      <div className={classes.title_icon}>
        <img src={vanzel} alt='' />
      </div>
      <div className={classes.step_section}>
        {steps.map((step, index) => (
          <Step key={index} {...step} step={index + 1} />
        ))}
      </div>
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

type IStep = IInstructionStep & {
  step: number
}

function Step(props: IStep) {
  const { description, img, step } = props

  return (
    <div className={classes.step}>
      <Img src={img} className={classes.step_img} />
      <div className={classes.step_text}>
        <H3>Шаг {step}</H3>
        <P14>{description}</P14>
      </div>
    </div>
  )
}

export default Instruction
