import { createSelector } from 'reselect'

export const todoListSelector = (state) => state.todoList
export const searchTextSelector = (state) => state.filters.search

export const todoListRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  (todoList, searchText) => {
    return todoList.filter((todo) => todo.name.toLowerCase().includes(searchText.toLowerCase()))
  },
)
