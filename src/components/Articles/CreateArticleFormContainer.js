import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { reduxForm } from 'redux-form';

import { createArticle } from '../../actions/articleActions';
import { articleError } from '../../selectors/articleSelectors';
import CreateArticleForm from './CreateArticleForm';

const form = 'Create';
// mapStatetoProps gets state and ownProps
const mapStateToProps = (state) => {
  // console.log('ownProps', ownProps);
  return {
    articleError: articleError(state),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: values => {
      dispatch(createArticle(ownProps.match.params.userId, values))
      .then(user => ownProps.history.push(`/sign-up/${user.id}/success`));
    }

  };
};


const CreateArticleFormContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form })
)(CreateArticleForm);

export default CreateArticleFormContainer;
