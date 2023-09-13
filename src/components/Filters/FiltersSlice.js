import { ACTION_TYPES } from '../../redux/actionTypes'

const initState = {
  search: '',
  status: 'All',
  priority: [],
}

const filtersReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.searchFilterChange:
      return {
        ...state,
        search: action.payload,
      }

    default:
      return state
  }
}

export default filtersReducer