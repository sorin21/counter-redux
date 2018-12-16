export const INCREMENT = 'INCREMENT';
export const increment = () => {
  return {
    type: 'INCREMENT'
  }
};

export const DECREMENT = 'DECREMENT';
export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
};

export const ADD = 'ADD';
export const add = (value) => {
  return {
    type: 'ADD',
    payload: value
  }
};

export const SUBSTRACT = 'SUBSTRACT';
export const substract = (value) => {
  return {
    type: 'SUBSTRACT',
    payload: value
  }
};

