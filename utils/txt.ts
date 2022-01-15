export default {
  /**
   * Из масива слов делает одну строку
   * @param stringArr массив слов
   * @param symbol символ между словами
   */
  join: function (stringArr: string[], symbol: string = " "): string {
    let str: string = ""

    stringArr.forEach((el) => {
      if (str !== "") {
        if (typeof el === "string" && el !== "") str = `${str}${symbol}${el}`
      } else str = el
    })

    return str
  },
  // принимает стоку типа "Как им <boild>пользоваться?</boild>"
  // возвращает:
  // [
  //   {
  //     text: 'Как им',
  //     isBoild: false
  //   },
  //   {
  //     text: 'пользоваться?',
  //     isBoild: true
  //   }
  // ]
  searchTag: (text: string, tag: string): IsearchTag[] => {
    let resText = []
    // текст в процессе выборки тегов
    // с кожным циклом уменьшается
    let lastText = text

    while (true) {
      const res = getFirstTag(lastText, tag)
      res.data.forEach((el) => {
        resText.push(el)
      })
      lastText = res.isNotCheckedText
      if (res.isNotCheckedText === "") break
    }

    return resText
  },
}

interface IsearchTag {
  text: string
  isTeg: boolean
}

// принимает стоку типа "Как им <boild>пользоваться?</boild> Отзывы о <boild>товаре</boild> dasd"
// возвращает:
// {
//   data: [
//     {
//       text: 'Как им',
//       isBoild: false
//     },
//     {
//       text: 'пользоваться?',
//       isBoild: true
//     }
//   ],
//   isNotCheckedText: "Отзывы о <boild>товаре</boild> dasd"
// }
function getFirstTag(text: string, tag: string) {
  const boildStartPosition = text.indexOf(`<${tag}>`)
  const boildEndPosition = text.indexOf(`</${tag}>`)
  if (boildStartPosition === -1 || boildEndPosition === -1)
    return {
      data: [{ text: text, isTeg: false }],
      isNotCheckedText: "",
    }
  const beforeText = (() => {
    return text.slice(0, boildStartPosition).trim()
  })()

  const afterText = (() => {
    return text.slice(boildStartPosition + tag.length + 2, boildEndPosition).trim()
  })()

  return {
    data: [
      { text: beforeText, isTeg: false },
      { text: afterText, isTeg: true },
    ],
    isNotCheckedText: text.slice(boildEndPosition + tag.length + 3, text.length).trim(),
  }
}
