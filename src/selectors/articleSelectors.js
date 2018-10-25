import collection from 'lodash/collection';

export const getArticles = state => collection.map(state.articles.results);

export const getArticle = (state, articleId) => state.articles.results[articleId];

export const articleLoading = state => state.articles.isLoading;

export const articleError = state => state.articles.error;
