import { ACTION_TYPES } from '../../redux/actionTypes'

const initState = {
  search: '',
  status: 'All',
  priorities: [],
}

const filtersReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.searchFilterChange:
      return {
        ...state,
        search: action.payload,
      }

    case ACTION_TYPES.statusFilterChange:
      return {
        ...state,
        status: action.payload,
      }

    case ACTION_TYPES.prioritiesFilterChange:
      return {
        ...state,
        priorities: action.payload,
      }

    default:
      return state
  }
}

export default filtersReducer
