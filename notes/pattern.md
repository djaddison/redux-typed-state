# Research Redux Patterns

## Basic Pattern

```typescript
import { createStore } from "redux"

interface Action {
  type: string
  value?: boolean
}

function reducer(state: boolean, action: Action): boolean {
  switch (action.type) {
    case "SHOW":
      return true
    case "HIDE":
      return false
    case "TOGGLE":
      return !state
    case "SET":
      return typeof action.value === "undefined" ? state : action.value
    default:
      return state
  }
}

const store = createStore(reducer)
store.dispatch({ type: "SHOW" })
store.dispatch({ type: "HIDE" })
store.dispatch({ type: "TOGGLE" })
store.dispatch({ type: "SET", value: false })
```

## Union types

```typescript
interface Action {
  type: "SHOW" | "HIDE" | "TOGGLE"
}
```

## Using a map to avoid using switch

```typescript
function reducer(state: boolean, action: Action): boolean {}
```

## Inline the functions in the map

```typescript
const map = {
  "SHOW": () => true,
  "HIDE": () => false,
  "TOGGLE": (state: boolean) => !state
  "default": () => state
}

const map = {
  SHOW(){
    return true
  },
  HIDE(){
    return false
  },
  TOGGLE(state: boolean){
    return !state
  },
  _default(){
    return state
  }
}
```
