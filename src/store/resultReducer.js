import { STORE_RESULT, DELETE_RESULT } from '../actions/results'

const initialState = {
  results: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_RESULT:
      return {
        ...state,
        // don't use push(), because push will mutete the original array
        results: state.results.concat({ id: new Date(), payloadResult: action.result })
      }
    case DELETE_RESULT:
      // Create a copy for results to not mutate the results array 
      // Return true if our id(from above STORE_RESULT) is not equal to index(id) that we pass to be removed
      const newArray = state.results.filter((item) => item.id !== action.payloadId);
      return {
        ...state,
        results: newArray
      }
    default:
      return state;
  }
}

export default rootReducer;