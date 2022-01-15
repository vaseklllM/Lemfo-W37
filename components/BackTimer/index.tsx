import { Component } from "react"
import { timer } from "../../utils"

interface IProps {
  onChange?: Function
}

interface IState {
  hour: number
  minute: number
  second: number
  timer: any
}

class BackTimer extends Component<IProps, IState> {
  state = {
    hour: 0,
    minute: 0,
    second: 0,
    timer: undefined,
  }

  componentDidMount() {
    this.startTimer()
  }

  componentWillUnmount() {
    this.stopTimer()
  }

  componentDidUpdate(prevProps: IProps, prevState: IState) {
    this.onChange(prevState)
  }

  onChange = (prevState: IState) => {
    const { hour, minute, second } = this.state
    if (
      hour !== prevState.hour ||
      minute !== prevState.minute ||
      second !== prevState.second
    ) {
      const { onChange = () => {} } = this.props
      onChange({ hour, minute, second })
    }
  }

  // старт счетчика
  startTimer = () => {
    const { hour, minute, second } = this.state
    if (hour !== 0 || minute !== 0 || second !== 0) {
      this.setState({ timer: setInterval(this.getNewTime, 1000) })
    } else {
      this.setState({ timer: setInterval(this.getNewDayTimer, 1000) })
    }
  }

  getNewDayTimer = () => {
    const date = new Date()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    this.setState({ hour: 24 - hour, minute: 60 - minutes, second: 60 - seconds })
  }

  // обновление таймера в state
  getNewTime = () => {
    const { hour, minute, second } = this.state
    this.setState(timer.minusSecond({ hour, minute, second }))
  }

  // остановка счетчика
  stopTimer = () => {
    const { timer } = this.state
    clearInterval(timer)
    this.setState({ timer: undefined })
  }

  render = () => null
}

export default BackTimer
