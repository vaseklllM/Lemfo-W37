export interface IOrder {
  title: string // описание блока информации о заказе
  steps: IStep[]
}

interface IStep {
  type: stepType
  title: string
  description: string
  img: string 
}

type stepType = "request" | "call" | "send" | "receiving"
