import { createSlice } from '@reduxjs/toolkit'
import { todoList } from '../../constants/todoList'

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: todoList,
  reducers: {
    addTodo(state, action) {
      state.push(action.payload)
    },
    todoStatusChange(state, action) {
      const _todo = state.find((todo) => todo.id === action.payload)
      _todo.isCompleted = !_todo.isCompleted
    },
  },
})

export default todoListSlice
