import { createStore } from "redux"

const SHOW = "component/property/SHOW"
const HIDE = "component/property/HIDE"
const TOGGLE = "component/property/TOGGLE"
const SET = "component/property/SET"

interface Action {
  type: "component/property/SHOW" | "component/property/HIDE" | "component/property/TOGGLE" | "component/property/SET"
  value?: boolean
}

function reducer(state: boolean, action: Action): boolean {
  switch (action.type) {
    case SHOW:
      return true
    case HIDE:
      return false
    case TOGGLE:
      return !state
    case SET:
      return typeof action.value === "undefined" ? state : action.value
    default:
      return state
  }
}

const store = createStore(reducer)
store.dispatch({ type: SHOW })
store.dispatch({ type: HIDE })
store.dispatch({ type: TOGGLE })
store.dispatch({ type: SET, value: false })
