import { combineReducers } from 'redux'

const businesses = (state = [], action) => {
  switch(action.type) {
      case "FETCH_MAKES":
          return action.value
      case 'REMOVE':
          const list = [ ...state ]
          list.splice(action.value, 1)
          console.log(action.value)
          return list
      case 'ADD':
          return [...state, action.value]
      default:
          return state
  }
}

const map = (state = {}, action) => {
  switch(action.type) {
    case "FETCH_LAT":
      return {...state, lat: action.value}
    case "FETCH_LNG":
      return {...state, lng: action.value}
    default:
      return state
  }
}

const user = (state = '', action) => {
  switch(action.type) {
    case "USER":
      return action.value
    default:
      return state
  }
}

export default combineReducers({ businesses, map, user })