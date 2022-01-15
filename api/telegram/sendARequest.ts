interface ISendMessageParams {
  name: string
  phoneNumber: string
}

export default async function sendARequest(params: ISendMessageParams): Promise<boolean> {
  const { name, phoneNumber } = params

  const chatid = "-542574032"
  const token = "1627660843:AAES2xadSf8is6EP6USAiFNqTzvunFtoQpY"
  const text = `<b>👋Заявка на покупку часов: WATCH SERIES 7👌</b>%0AИмя: ${name}%0AНомер телефона: ${phoneNumber}`

  const res = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatid}&parse_mode=HTML&text=${text}`
  )

  const data = await res.json()

  return data.ok
}
