export const stateDefault = {
  noticeBar: {
    visible: true,
    message: "Default Message"
  },
  sideBar: {
    visible: true
  },
  data: [""]
}

export const actionTypes = [
  "noticeBar/visible/show",
  "noticeBar/visible/hide",
  "noticeBar/visible/toggle",
  "noticeBar/message/set",
]

export const actionCreators = {
  noticeBar: {
    visible: {
      show: () => {type: "noticeBar/visible/show"},
      hide: () => {type: "noticeBar/visible/hide"},
      toggle: () => {type: "noticeBar/visible/toggle"},
    },
    message: {
      set: (value: string) => ({type: "noticeBar/message/set", value })
    }
  },
  sideBar: {
    visible: {
      show: () => {type: "sideBar/visible/show"},
      hide: () => {type: "sideBar/visible/hide"},
      toggle: () => {type: "sideBar/visible/toggle"},
    }
  }
}

export const reducers = combineReducers({
  noticeBar: combineReducers({
    visible: reducer,
    message: reducer
  })
})

function combineReducers(o: any){
  return o
}
function reducer(){
  return "x"
}
