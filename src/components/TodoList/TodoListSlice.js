import { todoList } from '../../constants/todoList'
import { ACTION_TYPES } from '../../redux/actionTypes'

const initState = todoList

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.addTodo:
      return [...state, action.payload]

    case ACTION_TYPES.todoStatusChange:
      return state.map((todo) => (todo.id === action.payload ? { ...todo, isCompleted: !todo.isCompleted } : todo))

    default:
      return state
  }
}

export default todoListReducer
