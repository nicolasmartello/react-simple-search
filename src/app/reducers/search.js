const search = (state, action) => {
  switch (action.type) {
  case 'SEARCH_GIF':
    return { ...state, result: action.result };
  default:
    return state;
  }
};

export default search;
