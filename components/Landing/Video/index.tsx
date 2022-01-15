import { useState } from "react"
import classes from "./style.module.scss"
import { PlayIcon } from "./icons"

interface IProps {
  data: {
    img?: string // картинка
    url?: string // ссылка на видео
  }
}

const index = (props: IProps) => {
  const { data } = props

  if (!data) return null

  const { img, url } = data

  const [isPlay, setIsPlay] = useState<boolean>(false)

  if (isPlay) {
    return (
      <section className={classes.video_container}>
        <iframe
          width='480'
          height='270'
          src={`${url}?modestbranding=1&autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1&rel=0&showinfo=0`}
          frameBorder={0}
        ></iframe>
      </section>
    )
  } else {
    return (
      <section
        className={classes.container}
        onClick={() => setIsPlay(true)}
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className={classes.icon_wrapper}>
          <PlayIcon className={classes.video_icon} />
        </div>
      </section>
    )
  }
}

export default index
