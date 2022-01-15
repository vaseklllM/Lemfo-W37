import { IOrder } from "./order"

export interface IPageData {
  companyName: string // название компании
  names: string[] // название товара
  phoneNumber: string // номер телефона
  advantages: string[] // список приемуществ
  goodsLeft: string | number // осталось товара
  slang: string // сленг товара
  descriptions: string[] // описание товара
  mainImages: string[] // картинки товара
  price: IPrice
  // блок видео
  video?: {
    img: string // картинка видео
    url: string // ссылка на видео
  }
  // сравнение
  comparison?: {
    title: string
    comparisons: Icomparison[]
  }
  // блок описания
  descriptionContainer?: {
    title: string // заголовок
    img: string // картинка описания
    text: string // описание
  }
  // инструкция использования
  instruction?: {
    title: string // описание блока инструкции
    steps: IInstructionStep[]
  }
  // Отзывы о товаре
  feedbacks: IFeedbacks
  // информация о заказе
  order?: IOrder
  // companyAddress
}

export interface IPrice {
  active: number // текущая цена
  prev?: number // предедущая цена или цена без скидки
  procent?: number // процент скидки
  valute: string // грн.
}

// сравнение
interface Icomparison {
  bad: {
    // плохой вариант
    img: string
    description: string
  }
  nice: {
    // хороший вариант
    img: string
    description: string
  }
}

interface IInstructionStep {
  img: string
  description: string
}

/**
 * отзыв
 */
export interface IFeedback {
  img: string
  city: string
  yearsOld: string
  name: string
  feedback: string
}

/**
 * параметры секции с отзывами
 */
export interface IFeedbacks {
  // описание блока отзывов
  // пример "Как им <boild>пользоваться?</boild>" где теги boild обозначают жырный шрифт
  title: string
  data: IFeedback[]
}
