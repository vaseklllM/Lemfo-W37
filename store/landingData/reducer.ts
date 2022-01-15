import { IPageData } from "../../interfaces/ISite"
import data from "./data"

export interface ILandingData {
  data: IPageData
}

const landingData: ILandingData = {
  data,
}

export default (state = landingData, action): ILandingData => {
  // const { payload } = action

  switch (action.type) {
    // загрузка информации о товарах
    // case types.GET_ALL_PRODUCTS:
    //   return {
    //     ...state,
    //     allProducts: payload,
    //     activeId: payload?.[0]?._id ?? 0,
    //     allProductsStatus: status.successful,
    //   }

    default:
      return state
  }
}
