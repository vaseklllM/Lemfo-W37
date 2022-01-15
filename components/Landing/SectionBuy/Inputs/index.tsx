import InputMask from "react-input-mask"
import classes from "./style.module.scss"
import { useState, useEffect } from "react"
import { UserIcon, PhoneIcon } from "./icons"
import { txt } from "../../../../utils"
import { useForm, Controller } from "react-hook-form"
import { Span12 } from "../../../Text"
import telegramApi from "../../../../api/telegram"
import { useRouter } from "next/router"
import thankActions from "../../../../store/thank/actions"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as fbq from '../../../../lib/fpixel'

interface IInputsProps {
  setLoader: (value: boolean) => void
  changePhoneNumber: (v: string) => void
}

type Inputs = {
  name: string
  phoneNumber: string
}

function Inputs(props: IInputsProps) {
  const { setLoader, changePhoneNumber } = props
  const { register, handleSubmit, control, watch } = useForm<Inputs>()
  const [errors, setErrors] = useState({ name: undefined, phoneNumber: undefined })

  const router = useRouter()

  const name = watch("name")
  const phoneNumber = watch("phoneNumber")

  useEffect(() => {
    if (typeof errors.name === "string" && name.length >= 2) {
      setErrors((v) => ({ ...v, name: undefined }))
    }

    if (
      typeof errors.phoneNumber === "string" &&
      phoneNumber.replace(/\D+/g, "").length === 12
    ) {
      setErrors((v) => ({ ...v, phoneNumber: undefined }))
    }
  }, [name, phoneNumber])

  async function sendDataToTelegram(data: Inputs, defPhoneNum) {
    const { name, phoneNumber } = data

    setLoader(true)
    const ok = await telegramApi.sendARequest({ name, phoneNumber })

    if (ok) {
      setLoader(false)
      changePhoneNumber(defPhoneNum)
      fbq.event('Purchase', { currency: 'UAH', value: 499 })
      router.push("/thanks")
    }
  }

  function buy(data: Inputs) {
    const { name } = data
    const phoneNumber = data.phoneNumber.replace(/\D+/g, "")

    const isErrName = name.length < 2
    const isErrPhone = phoneNumber.length !== 12

    /** валидация */
    if (isErrName || isErrPhone) {
      if (isErrName) {
        if (name === "") {
          setErrors((v) => ({ ...v, name: "Введите имя" }))
        } else setErrors((v) => ({ ...v, name: "Несуществующие имя" }))
      } else {
        setErrors((v) => ({ ...v, name: undefined }))
      }

      if (isErrPhone) {
        if (phoneNumber === "") {
          setErrors((v) => ({ ...v, phoneNumber: "Введите номер телефона" }))
        } else {
          setErrors((v) => ({ ...v, phoneNumber: "Неправильный номер" }))
        }
      } else {
        setErrors((v) => ({ ...v, phoneNumber: undefined }))
      }

      return undefined
    }

    setErrors((v) => ({ ...v, name: undefined, phoneNumber: undefined }))

    sendDataToTelegram({ phoneNumber, name }, data.phoneNumber)
  }

  return (
    <form onSubmit={handleSubmit(buy)} className={classes.form}>
      <div
        className={txt.join([classes.input_wrapper, errors.name && classes.input_err])}
      >
        <UserIcon className={classes.input_icon} />
        <input
          className={classes.input}
          name='name'
          placeholder='Введите ваше имя'
          ref={register}
        />
        {errors.name && <Span12 className={classes.err_text}>{errors.name}</Span12>}
      </div>
      <div
        className={txt.join([
          classes.input_wrapper,
          errors.phoneNumber && classes.input_err,
        ])}
      >
        <PhoneIcon className={txt.join([classes.input_icon, classes.phone_icon])} />
        <Controller
          as={InputMask}
          control={control}
          mask='+38 (999)-999-99-99'
          name='phoneNumber'
          placeholder='Введите ваш телефон'
          className={classes.input}
          defaultValue=''
        />
        {errors.phoneNumber && (
          <Span12 className={classes.err_text}>{errors.phoneNumber}</Span12>
        )}
      </div>
      <input type='submit' className={classes.btn} value='Купить сейчас' />
    </form>
  )
}

const mapDispatch = (d) => {
  const { changePhoneNumber } = thankActions
  return bindActionCreators({ changePhoneNumber }, d)
}

export default connect(null, mapDispatch)(Inputs)
