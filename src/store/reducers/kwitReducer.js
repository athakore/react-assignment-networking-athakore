import * as actionTypes from '../actions/'

const initialState = {
  kwits: []
}

const kwitReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_KWITS:
      return { ...state, kwits: action.kwits }
    case actionTypes.CREATE_KWIT:
      return { ...state, kwits: action.kwits }
    case actionTypes.DELETE_KWIT:
      return { ...state, kwits: action.kwits }
    default:
      return state
  }
}

export default kwitReducer
