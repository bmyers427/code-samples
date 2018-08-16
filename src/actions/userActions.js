export const SIGN_UP_USER = 'SIGN_UP_USER';

export const signUpUser = userData => dispatch => (
  dispatch({
    type: 'callAPI',
    request_type: SIGN_UP_USER,
    endpoint: 'api/users',
    method: 'POST',
    body: {
      user: userData
    }
  })
);

export const UPDATE_USER = 'UPDATE_USER';

export const updateUser = (userId, userData) => dispatch => (
  dispatch({
    type: 'callAPI',
    request_type: UPDATE_USER,
    endpoint: `api/users/${userId}`,
    method: 'PUT',
    body: {
      user: userData
    }
  })
);

export const DELETE_USER = 'DELETE_USER';

export const deleteUser = (userId) => dispatch => (
  dispatch({
    type: 'callAPI',
    request_type: DELETE_USER,
    endpoint: `api/users/${userId}`,
    method: 'DELETE'
  })
);

// async API actions are required to have a type of callAPI and an endpoint
// can also have a body, query and method (if not provided, defaults to a GET request)
export const TEST_RETRIEVE_USERS = 'TEST_RETRIEVE_USERS';

export const retrieveUsers = () => ({
  type: 'callAPI',
  request_type: TEST_RETRIEVE_USERS,
  endpoint: `api/users`
});
