import {
  LOAD_GIF_LIST,
  UPDATE_GIF_LIST,
} from '../constants/actionTypes';

let arrFavorites = [];
const initialState = {
  result: [],
};
const list = (state = initialState, action) => {
  switch (action.type) {
  case LOAD_GIF_LIST:
    if (state.favorites) {
      arrFavorites = state.favorites.list;
    } else {
      arrFavorites = [];
    }
    return {
      ...state,
      result: action.gifList.map(item => ({
        ...item,
        is_in_favorites: (arrFavorites.findIndex(e => (e.id === item.id)) > -1),
      })),
    };
  case UPDATE_GIF_LIST:
    const i = state.result.findIndex(item => item.id === action.item.id);
    const newList = state.result;
    
    newList[i].is_in_favorites = !newList[i].is_in_favorites;
    return {
      ...state,
      result: newList,
    };
  default:
    return state;
  }
};

export default list;
