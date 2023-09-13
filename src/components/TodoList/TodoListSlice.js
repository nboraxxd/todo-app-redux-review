import { todoList } from '../../constants/todoList'
import { ACTION_TYPES } from '../../redux/actionTypes'

const initState = todoList

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.addTodo:
      return [...todoList, action.payload]

    default:
      return state
  }
}

export default todoListReducer
