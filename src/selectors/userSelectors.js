import collection from 'lodash/collection';

export const getUsers = state => collection.map(state.users.results);

export const getUser = (state, userId) => state.users.results[userId];

export const userLoading = state => state.users.isLoading;

export const userError = state => state.users.error;
