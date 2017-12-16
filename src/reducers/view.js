import { PAGE_VIEW } from '../constants/ActionTypes'

const view = (state = {page: 'products'}, action) => {
  switch (action.type) {
    case PAGE_VIEW:
      return {
        ...state,
        page: action.view
      };
    default:
      return state;
  }
}

export default view
