import classes from "./style.module.scss"
import { txt } from "../../../utils"

interface IProps {
  src: string
  className?: string
  isNotBacground?: boolean
}

function Img(props: IProps) {
  const { src, className, isNotBacground } = props

  if (isNotBacground) {
    return <img src={src} alt='' className={className} />
  } else {
    return (
      <div
        className={txt.join([classes.ImgBack, className])}
        style={{ backgroundImage: `url(${src})` }}
      ></div>
    )
  }
}

export default Img
