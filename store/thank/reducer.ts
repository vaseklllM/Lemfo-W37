import types from "./types"

export interface IThankStore {
  phoneNumber: string
}

const thank: IThankStore = {
  phoneNumber: undefined,
}

export default (state = thank, action): IThankStore => {
  const { payload } = action

  switch (action.type) {
    // загрузка информации о товарах
    case types.CHANGE_PHONE_NUMBER:
      if (typeof payload === "string") {
        return {
          ...state,
          phoneNumber: payload,
        }
      } else return state

    default:
      return state
  }
}
