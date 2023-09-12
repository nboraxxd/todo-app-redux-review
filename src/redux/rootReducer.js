import { todoList } from '../constants/todoList'
import { ACTION_TYPES } from './actionTypes'

const initState = {
  filters: {
    search: '',
    status: 'All',
    priority: [],
  },
  todoList,
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.addTodo:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      }

    case ACTION_TYPES.searchFilterChange:
      return {
        ...state,
        filters: {
          ...state.filters,
          search: action.payload,
        },
      }

    default:
      return state
  }
}

export default rootReducer
