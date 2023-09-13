import { createSelector } from 'reselect'

export const todoListSelector = (state) => state.todoList
export const searchTextSelector = (state) => state.filters.search
export const statusFilterSelector = (state) => state.filters.status

export const todoListRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  statusFilterSelector,
  (todoList, searchText, statusFilter) => {
    return todoList.filter(
      (todo) =>
        todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
        (statusFilter === 'All' || todo.isCompleted === (statusFilter === 'Completed')),
    )
  },
)
