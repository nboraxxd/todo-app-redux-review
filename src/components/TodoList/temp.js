const { useDispatch } = require('react-redux')

// REDUCER
const initValue = { value: 0 }
const rootReducer = (state = initValue, action) => {
  switch (action.type) {
    case ACTION_TYPES.increment:
      return {
        ...state,
        value: state.value + action.payload || 1,
      }

    case ACTION_TYPES.decrement:
      return {
        ...state,
        value: state.value - action.payload || 1,
      }

    default:
      return state
  }
}

// ACTION_TYPE
const ACTION_TYPES = {
  increment: 'count/increment',
  decrement: 'count/decrement',
}

// ACTION CREATORS
const increment = (data) => {
  return {
    type: ACTION_TYPES.increment,
    payload: data,
  }
}

const decrement = (data) => {
  return {
    type: ACTION_TYPES.decrement,
    payload: data,
  }
}

// DISPATCH
const dispatch = useDispatch()
dispatch(increment(1))
dispatch(decrement(1))
