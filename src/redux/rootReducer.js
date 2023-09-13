import filtersReducer from '../components/Filters/FiltersSlice'
import todoListReducer from '../components/TodoList/TodoListSlice'

const rootReducer = (state = {}, action) => {
  console.log(state)
  return {
    filters: filtersReducer(state.filter, action),
    todoList: todoListReducer(state.todoList, action),
  }
}

export default rootReducer
