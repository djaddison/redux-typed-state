import { createStore, Action, Reducer } from "redux";

export default function chainReducers<State = any>(reducers: Reducer[]) {
  return (initialState: State, action: Action) => {
    return reducers.reduce((accumulatedState, reducer) => {
      return reducer(accumulatedState, action);
    }, initialState);
  };
}

interface ActionA {
  type: string;
}

interface ActionB {
  type: string;
  value: boolean;
}

function show(state: boolean, action: ActionA): boolean {
  return action.type === "component/property/SHOW" ? true : state;
}

function hide(state: boolean, action: ActionA): boolean {
  return action.type === "component/property/HIDE" ? false : state;
}

function toggle(state: boolean, action: ActionA): boolean {
  return action.type === "component/property/TOGGLE" ? !state : state;
}

function set(state: boolean, action: ActionB): boolean {
  return action.type === "component/property/SET" ? action.value : state;
}

const chain = chainReducers([show, hide, toggle, set]);
const store = createStore(chain);
store.dispatch({ type: "component/property/SHOW" });
store.dispatch({ type: "component/property/HIDE" });
store.dispatch({ type: "component/property/TOGGLE" });
store.dispatch({ type: "component/property/SET", value: false });
