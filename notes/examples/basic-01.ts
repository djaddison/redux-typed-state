import { createStore } from "redux"

interface Action {
  type: string
  value?: boolean
}

function reducer(state: boolean, action: Action): boolean {
  switch (action.type) {
    case "component/property/SHOW":
      return true
    case "component/property/HIDE":
      return false
    case "component/property/TOGGLE":
      return !state
    case "component/property/SET":
      return typeof action.value === "undefined" ? state : action.value
    default:
      return state
  }
}

const store = createStore(reducer)
store.dispatch({ type: "component/property/SHOW" })
store.dispatch({ type: "component/property/HIDE" })
store.dispatch({ type: "component/property/TOGGLE" })
store.dispatch({ type: "component/property/SET", value: false })
