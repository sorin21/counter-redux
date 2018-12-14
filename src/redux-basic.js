const redux = require('redux');

const createStore = redux.createStore;

const initialState = {
  counter: 0
}
// Reducer
const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        // copy the whole old state
        ...state,
        counter: state.counter + 1
      }
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.payload
      }
    default:
      return state;
  }
  
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());



// Subscription
// The callback is called when the state is updated
// so when an action reach the reducer
store.subscribe(() => {
  console.log('Subscription', store.getState());
})
// Dipathing actions
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'ADD', payload: 5})
console.log(store.getState());

// const redux = require('redux');
// const createStore = redux.createStore;

// const initialState = {
//   counter: 0
// }
// // Reducer
// const rootReducer = (state = initialState, action) => {
//   if(action.type === 'INC_COUNTER')
//   return {
//     // copy the old state
//     ...state,
//     // overwrite the counter
//     counter: state.counter + 1
//   };

//   if(action.type === 'ADD_COUNTER')
//   return {
//     // copy the old state
//     ...state,
//     // overwrite the counter
//     counter: state.counter + action.payload
//   };
//   return state;
// }

// // Store
// const store = createStore(rootReducer);
// console.log(store.getState());

// // Subscription
// store.subscribe(() => {
//   console.log('Subscription', store.getState());
// });

// // Action
// store.dispatch({type: 'INC_COUNTER'});
// store.dispatch({type: 'ADD_COUNTER', payload: 10});
// console.log(store.getState());