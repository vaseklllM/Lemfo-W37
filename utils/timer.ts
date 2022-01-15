interface IParams {
  hour: number
  minute: number
  second: number
}

interface IConvertReturn {
  hour: string
  minute: string
  second: string
}

export default {
  // отнимает 1 секудку от времени которое принимает
  minusSecond: (params: IParams): IParams => {
    const { hour, minute, second } = params
    if (second === 0 && minute === 0 && hour === 0) return undefined
    if (second !== 0) {
      return { hour, minute, second: second - 1 }
    } else if (minute !== 0) {
      return { hour, minute: minute - 1, second: 59 }
    } else if (hour !== 0) {
      return { hour: hour - 1, minute: 59, second: 59 }
    }
  },

  // конвертирует в формать для отображения 
  convertToShow: (params: IParams): IConvertReturn => {
    const { hour, minute, second } = params

    function convert(number: number): string {
      if (number < 10) return `0${number}`
      else return "" + number
    }

    const newHour = convert(hour)
    const newMinute = convert(minute)
    const newSecond = convert(second)

    return { hour: newHour, minute: newMinute, second: newSecond }
  },
}
