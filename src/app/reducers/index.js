import {
  LOAD_GIF_LIST,
  UPDATE_GIF_LIST,
  ADD_ITEM_TO_FAVORITES,
  REMOVE_ITEM_FROM_FAVORITES,
  LOAD_FAVORITES_LIST,
} from '../constants/actionTypes';

let arrFavorites = [];
const initialState = {
  list: {
    result: [],
  },
  favorites: {
    list: [],
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
  case LOAD_GIF_LIST:
    if (state.favorites) {
      arrFavorites = state.favorites.list;
    } else {
      arrFavorites = [];
    }
    return {
      ...state,
      list: {
        result: action.gifList.map(item => ({
          ...item,
          is_in_favorites: (arrFavorites.findIndex(e => (e.id === item.id)) > -1),
        }))
      },
    };
  case UPDATE_GIF_LIST:
    const i = state.list.result.findIndex(item => item.id === action.item.id);
    if(i < 0) return state;

    const newListResult = [...state.list.result];
    newListResult[i].is_in_favorites = !newListResult[i].is_in_favorites;
    return {
      ...state,
      result: newListResult,
    };
  case LOAD_FAVORITES_LIST:
    return { ...state, favorites: { list: action.favorites } };
  case ADD_ITEM_TO_FAVORITES:
    if (!state.favorites.list) return state;
    
    const newFavoriteList = [...state.favorites.list];
    newFavoriteList.push({ ...action.item, is_in_favorites: true });
    
    return {
      ...state,
      favorites: { list: newFavoriteList },
    };
  case REMOVE_ITEM_FROM_FAVORITES:
    return {
      ...state,
      favorites: { list: state.favorites.list.filter(item => item.id !== action.item.id) },
    };

  default:
    return state;
  }
};

export default rootReducer;