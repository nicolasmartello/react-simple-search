import SEARCH_SET_RESULT from '../constants/actionTypes';

const initialState = {
  result: [],
};

const search = (state = initialState, action) => {
  switch (action.type) {
  case SEARCH_SET_RESULT:
    return { ...state, result: action.result };
  default:
    return state;
  }
};

export default search;
