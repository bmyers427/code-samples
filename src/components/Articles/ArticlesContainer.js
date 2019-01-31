import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { retrieveArticles } from '../../actions/articleActions';
import { getArticles, articleError } from '../../selectors/articleSelectors';
import Articles from './Articles';
import { getUser, userError } from '../../selectors/userSelectors';

const mapStateToProps = (state, ownProps) => {
  const articles = getArticles(state);
  const user = getUser(state, ownProps.match.params.userId);
  return {
    articles,
    user,
    articleError: articleError(state),
    userError: userError(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    retrieveArticles: (user) => dispatch(retrieveArticles(user.id)),
  };
};

const ArticlesContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps ),
)(Articles);

export default ArticlesContainer;
