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
    return { ...state, list: action.favorites };
  case ADD_ITEM_TO_FAVORITES:
    if (!state.list) return state;
    
    const newList = state.list;
    newList.push({ ...action.item, is_in_favorites: true });
    
    return {
      ...state,
      list: newList,
    };
  case REMOVE_ITEM_FROM_FAVORITES:
    return {
      ...state,
      list: state.list.filter(item => item.id !== action.item.id),
    };
  default:
    return state;
  }
};

export default favorites;
