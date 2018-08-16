import * as apiActions from '../actions/apiActions';

const initialState = {
  error: null,
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case apiActions.CLEAR_API_ERROR:
      return {
        ...state,
        error: null,
        isLoading: false
      };

    default:
      return state;
  }
};
