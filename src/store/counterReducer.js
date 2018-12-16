import { INCREMENT, DECREMENT, ADD, SUBSTRACT } from '../actions/counter'

const initialState = {
  counter: 0
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        // copy the whole old state
        ...state,
        counter: state.counter + 1
      }
    case DECREMENT:
      return {
        // copy the whole old state
        ...state,
        counter: state.counter - 1
      }
    case ADD:
      return {
        ...state,
        counter: state.counter + action.payload
      }
    case SUBSTRACT:
      return {
        ...state,
        counter: state.counter - action.payload
      }
    default:
      return state;
  }
}

export default rootReducer;