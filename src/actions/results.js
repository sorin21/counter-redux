const saveResult = (counter) => {
  return {
    type: 'STORE_RESULT',
    result: counter
  }
}

export const STORE_RESULT = 'STORE_RESULT';
// we get dispatch here from redux thunk
export const storeResult = (counter) => dispatch => {
  setTimeout(() => {
    // always pase the argument function like a function
    dispatch(saveResult(counter));
  }, 2000)
};

export const DELETE_RESULT = 'DELETE_RESULT';
export const deleteResult = (value) => {
  return {
    type: 'DELETE_RESULT',
    payloadId: value
  }
};