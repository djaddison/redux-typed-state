/*============================================================================
# 00 Basic Pattern

## Pros
- simple approach
- easy to reason about when there is a small number of lines of code

## Cons
- doesn't promote reuse of code
- hardcoded action types
- duplication of action type strings across action creators and reducer
- Action interface declares value to be optional
  - this loosens the typing for
  - requires conditional check 'typeof action.value === "undefined"' in SET

## Improvements
- externalize action types to have the string defined once
- split the switch statement across multiple sequential reducers (chained) to
  allow stronger typing of the Action interface
- add stronger typing to interface Action.type. It would be good to limit
  the possible string values to the defined action types
  (ex: "component/property/SHOW").
============================================================================*/

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

// Action Creators
function componentPropertyShow(): Action {
  return { type: "component/property/SHOW" }
}
function componentPropertyHide(): Action {
  return { type: "component/property/HIDE" }
}
function componentPropertyToggle(): Action {
  return { type: "component/property/TOGGLE" }
}
function componentPropertySet(value: boolean): Action {
  return { type: "component/property/SET", value }
}

const store = createStore(reducer)
store.dispatch(componentPropertyShow())
store.dispatch(componentPropertyHide())
store.dispatch(componentPropertyToggle())
store.dispatch(componentPropertySet(false))
