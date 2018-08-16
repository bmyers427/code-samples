import * as userActions from '../actions/userActions';
import { CLEAR_API_ERROR } from '../actions/apiActions';
import keyBy from 'lodash/keyBy';
import omit from 'lodash/omit';

const initialState = {
  error: null,
  isLoading: false,
  results: []
};

export default (state = initialState, action) => {
  switch (action.type) {

    case `${userActions.SIGN_UP_USER}_REQUEST_START`:
      return {
        ...state,
        error: null,
        isLoading: true
      };

    case `${userActions.SIGN_UP_USER}_REQUEST_SUCCESS`:{
      const user = action.payload;
      return {
        ...state,
        results: {
          ...state.results,
          [user.id]: user
        },
        error: null
      };
    }
    case `${userActions.SIGN_UP_USER}_REQUEST_FAILURE`:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };

    case `${userActions.UPDATE_USER}_REQUEST_START`:
    case `${userActions.DELETE_USER}_REQUEST_START`:
    case `${userActions.TEST_RETRIEVE_USERS}_REQUEST_START`:
      return {
        ...state,
        error: null,
        isLoading: true
      };

    case `${userActions.TEST_RETRIEVE_USERS}_REQUEST_SUCCESS`: {
        return {
          ...state,
          results: keyBy(action.payload, 'id'),
          error: null,
          isLoading: false
        };
      }

    case `${userActions.TEST_RETRIEVE_USERS}_REQUEST_FAILURE`:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };

    case `${userActions.UPDATE_USER}_REQUEST_SUCCESS`: {
      const user = action.payload;
        return {
          ...state,
          results: {
            ...state.results,
            [user.id]: user
          },
          error: null,
          isLoading: false
        };
      }

    case `${userActions.UPDATE_USER}_REQUEST_FAILURE`:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };

    case `${userActions.DELETE_USER}_REQUEST_SUCCESS`: {
      const user = action.payload;
        return {
          ...state,
          results: omit(state.results, user.id),
          error: null,
          isLoading: false
        };
      }


    case CLEAR_API_ERROR:
      return {
        ...state,
        error: null,
        isLoading: false
      };

    default:
      return state;
  }
};
