import {
  LOAD_GIF_LIST,
  UPDATE_GIF_LIST,
} from '../constants/actionTypes';

const loadGifList = gifList => ({
  type: LOAD_GIF_LIST,
  gifList,
});

const updateGifList = item => ({
  type: UPDATE_GIF_LIST,
  item,
});

export default {
  loadGifList,
  updateGifList,
};
