import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { deleteArticle } from '../../actions/articleActions';
import { getUser, userError } from '../../selectors/userSelectors';
import { getArticle, articleError } from '../../selectors/articleSelectors';
import DeleteButton from './DeleteButton';

// mapStatetoProps gets state and ownProps
const mapStateToProps = (state, ownProps) => {
  const user = getUser(state, ownProps.match.params.userId);
  const article = getArticle(state, ownProps.match.params.articleId);
  return {
    user,
    article,
    userError: userError(state),
    articleError: articleError(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteArticle: () => dispatch(deleteArticle(ownProps.match.params.userId, ownProps.match.params.articleId))
    .then(() => {
      ownProps.history.push(`/users/${ownProps.match.params.userId}/user-info`);
    })
  };
};

const DeleteArticleContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(DeleteButton);

export default DeleteArticleContainer;
