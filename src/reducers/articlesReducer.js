import * as articleActions from '../actions/articleActions';
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

    case `${articleActions.CREATE_ARTICLE}_REQUEST_START`:
      return {
        ...state,
        error: null,
        isLoading: true
      };

    case `${articleActions.CREATE_ARTICLE}_REQUEST_SUCCESS`:{
      const article = action.payload;
      return {
        ...state,
        results: {
          ...state.results,
          [article.id]: article
        },
        error: null
      };
    }
    case `${articleActions.CREATE_ARTICLE}_REQUEST_FAILURE`:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };

    case `${articleActions.UPDATE_ARTICLE}_REQUEST_START`:
    case `${articleActions.DELETE_ARTICLE}_REQUEST_START`:
    case `${articleActions.RETRIEVE_ARTICLES}_REQUEST_START`:
      return {
        ...state,
        error: null,
        isLoading: true
      };

    case `${articleActions.RETRIEVE_ARTICLES}_REQUEST_SUCCESS`: {
        return {
          ...state,
          results: keyBy(action.payload, 'id'),
          error: null,
          isLoading: false
        };
      }

    case `${articleActions.RETRIEVE_ARTICLES}_REQUEST_FAILURE`:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };

    case `${articleActions.UPDATE_ARTICLE}_REQUEST_SUCCESS`: {
      const article = action.payload;
        return {
          ...state,
          results: {
            ...state.results,
            [article.id]: article
          },
          error: null,
          isLoading: false
        };
      }

    case `${articleActions.UPDATE_ARTICLE}_REQUEST_FAILURE`:
      return {
        ...state,
        error: action.error,
        isLoading: false
      };

    case `${articleActions.DELETE_ARTICLE}_REQUEST_SUCCESS`: {
      const article = action.payload;
        return {
          ...state,
          results: omit(state.results, article.id),
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
