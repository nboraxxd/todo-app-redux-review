import { createSelector } from '@reduxjs/toolkit'

export const todoListSelector = (state) => state.todoList
export const searchTextSelector = (state) => state.filters.search
export const statusFilterSelector = (state) => state.filters.status
export const prioritiesFilterSelector = (state) => state.filters.priorities

export const todoListRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  statusFilterSelector,
  prioritiesFilterSelector,
  (todoList, searchText, statusFilter, priorities) => {
    const todoListRemaining = todoList.filter(
      (todo) =>
        todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
        (statusFilter === 'All' || todo.isCompleted === (statusFilter === 'Completed')),
    )

    return todoListRemaining.filter((todo) => priorities.length === 0 || priorities.includes(todo.priority))
  },
)
