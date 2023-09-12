import { ACTION_TYPES } from './actionTypes'

export const addTodo = (todo) => {
  return {
    type: ACTION_TYPES.addTodo,
    payload: todo,
  }
}

export const searchFilterChange = (searchText) => {
  return {
    type: ACTION_TYPES.searchFilterChange,
    payload: searchText,
  }
}
