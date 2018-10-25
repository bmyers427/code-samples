export const CREATE_ARTICLE = 'CREATE_ARTICLE';

export const createArticle = (userId, articleData) => dispatch => (
  dispatch({
    type: 'callAPI',
    request_type: CREATE_ARTICLE,
    endpoint: 'api/users/${userId}/articles',
    method: 'POST',
    body: {
      article: articleData
    }
  })
);

export const UPDATE_ARTICLE = 'UPDATE_ARTICLE';

export const updateArticle = (userId, articleId, articleData) => dispatch => (
  dispatch({
    type: 'callAPI',
    request_type: UPDATE_ARTICLE,
    endpoint: `api/users/${userId}/articles/${articleId}`,
    method: 'PUT',
    body: {
      article: articleData
    }
  })
);

export const DELETE_ARTICLE = 'DELETE_ARTICLE';

export const deleteArticle = (userId, articleId) => dispatch => (
  dispatch({
    type: 'callAPI',
    request_type: DELETE_ARTICLE,
    endpoint: `api/users/${userId}/articles/${articleId}`,
    method: 'DELETE'
  })
);

// async API actions are required to have a type of callAPI and an endpoint
// can also have a body, query and method (if not provided, defaults to a GET request)
export const RETRIEVE_ARTICLES = 'RETRIEVE_ARTICLES';

export const retrieveArticles = (userId) => ({
  type: 'callAPI',
  request_type: RETRIEVE_ARTICLES,
  endpoint: `api/users/${userId}/articles`
});
