import { ILandingData } from "../landingData/reducer"
import { IThankStore } from "../thank/reducer"

interface IStore {
  landingData: ILandingData
  thank: IThankStore
}

export default IStore
