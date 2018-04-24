import {
  ADD_ITEM_TO_FAVORITES,
  REMOVE_ITEM_FROM_FAVORITES,
  LOAD_FAVORITES_LIST,
} from '../constants/actionTypes';

const initialState = {
  list: [],
};
const favorites = (state = initialState, action) => {
  switch (action.type) {
  case LOAD_FAVORITES_LIST:
    return { ...state, favorites: action.favorites };
  case ADD_ITEM_TO_FAVORITES:
    return {
      ...state,
      favorites: state.favorites.push(action.item),
    };
  case REMOVE_ITEM_FROM_FAVORITES:
    return {
      ...state,
      favorites: state.favorites.filter(item => (item.id !== action.item.id)),
    };
  default:
    return state;
  }
};

export default favorites;
