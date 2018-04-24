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
      arrFavorites = state.favorites;
    } else {
      arrFavorites = [];
    }
    return {
      ...state,
      result: action.gifList.map(item => ({
        ...item,
        isInFavorites: (arrFavorites.findIndex(e => (e.id === item.id)) > -1),
      })),
    };
  case UPDATE_GIF_LIST:
    return {
      ...state,
      result: state.gifList.map((item) => {
        if (item.id === state.item.id) return state.item;
        return item;
      }),
    };
  default:
    return state;
  }
};

export default list;
