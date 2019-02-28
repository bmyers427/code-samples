import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FormField.scss';

class TextArea extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired,
    height: PropTypes.string
  };

  render() {
    const { input, label, height, meta: { touched, error } } = this.props;
    const hasError = touched && error;
    const labelClass = hasError ? `${css.label} ${css.errorLabel}` : css.label;

    return (
      <div className={css.formGroup}>
        <label className={labelClass}>
          {label}
          {hasError && <strong><span className={css.fieldError}>{error}</span></strong>}
        </label>

        <textarea {...input} className={`${css.textarea} ${hasError ? css.errorInput : ''}`} style={{height: height}}
        />
      </div>
    );
  }
}

export default TextArea;
