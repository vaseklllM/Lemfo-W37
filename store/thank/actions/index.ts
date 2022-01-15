import PhoneNumber from "../../../components/Landing/PhoneNumber"
import types from "../types"

const thankActions = {
  changePhoneNumber: (payload: string) => ({ type: types.CHANGE_PHONE_NUMBER, payload }),
}

export default thankActions
