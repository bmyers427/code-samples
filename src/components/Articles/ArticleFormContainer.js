import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { reduxForm } from 'redux-form';

import { createArticle, updateArticle } from '../../actions/articleActions';
import { articleError, getArticle } from '../../selectors/articleSelectors';
import ArticleForm from './ArticleForm';

const form = 'Create';
// mapStatetoProps gets state and ownProps
const mapStateToProps = (state, ownProps) => {
  if (ownProps.match.params.articleId) {
    const article = getArticle(state, ownProps.match.params.articleId);
    return {
      initialValues: article,
      articleError: articleError(state),
    };
  }
  // console.log('ownProps', ownProps);
  else {
    return {
      articleError: articleError(state),
    };
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: values => {
      // copies values into new hash and adds user_id
      const articleData = {
        ...values,
        user_id: ownProps.match.params.userId
      };
      if (ownProps.match.params.articleId) {
        dispatch(updateArticle(ownProps.match.params.userId, ownProps.match.params.articleId, articleData))
        .then(user => ownProps.history.push(`/sign-up/${user.id}/success`));
      }
      else {
        dispatch(createArticle(ownProps.match.params.userId, articleData))
      .then(user => ownProps.history.push(`/sign-up/${user.id}/success`));
    }
    }

  };
};


const ArticleFormContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form })
)(ArticleForm);

export default ArticleFormContainer;
