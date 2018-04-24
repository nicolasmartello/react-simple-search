import {
  REMOVE_ITEM_FROM_FAVORITES,
  ADD_ITEM_TO_FAVORITES,
} from '../constants/actionTypes';

const removeItemFromFavorites = item => ({
  type: REMOVE_ITEM_FROM_FAVORITES,
  item,
});

const addItemToFavorites = item => ({
  type: ADD_ITEM_TO_FAVORITES,
  item,
});

export default {
  removeItemFromFavorites,
  addItemToFavorites,
};
