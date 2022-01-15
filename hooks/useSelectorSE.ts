import { shallowEqual, useSelector } from "react-redux"

export function useSelectorSE<TState = {}, TSelected = unknown>(selector: (state: TState) => TSelected): TSelected {
  return useSelector(selector, shallowEqual)
}