import { combineReducers } from 'redux'

const businesses = (state = [], action) => {
  switch(action.type) {
      case "FETCH_MAKES":
          return action.value
      // case 'REMOVE_CAR':
      //     const makes = [ ...state ]
      //     makes.splice(action.value, 1)
      //     console.log(action.value)
      //     return makes
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

export default combineReducers({ businesses, map })