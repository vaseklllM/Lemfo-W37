import classes from "./style.module.scss"
import { Span14, Span16bold } from "../../../Text"
import { Component } from "react"
import { timer } from "../../../../utils"
import Timer from "../../../BackTimer"

interface IProps {
  greyColor: string
  greenColor: string
}
interface IState {
  hour: number | string
  minute: number | string
  second: number | string
  timer: any
}

class BackTimer extends Component<IProps, IState> {
  state = {
    hour: 0,
    minute: 0,
    second: 0,
    timer: undefined,
  }

  changeTimer = (newTime) => {
    this.setState(timer.convertToShow(newTime))
  }

  render() {
    const { hour, minute, second } = this.state
    const { greyColor, greenColor } = this.props

    return (
      <div className={classes.backTimer}>
        <Timer onChange={this.changeTimer} />
        <div className={classes.title}>
          <Span14>До конца акции:</Span14>
        </div>
        <div className={classes.timer}>
          <div className={classes.hour} style={{ backgroundColor: greyColor }}>
            <Span16bold className={classes.timerText} style={{ color: greenColor }}>
              {hour}
            </Span16bold>
          </div>
          <span className={classes.twoPoints}>:</span>
          <div className={classes.minute} style={{ backgroundColor: greyColor }}>
            <Span16bold className={classes.timerText} style={{ color: greenColor }}>
              {minute}
            </Span16bold>
          </div>
          <span className={classes.twoPoints}>:</span>
          <div className={classes.second} style={{ backgroundColor: greyColor }}>
            <Span16bold className={classes.timerText} style={{ color: greenColor }}>
              {second}
            </Span16bold>
          </div>
        </div>
      </div>
    )
  }
}

export default BackTimer
