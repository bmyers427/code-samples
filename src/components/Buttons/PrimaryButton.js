import React from 'react';
import { PropTypes } from 'prop-types';
import css from './PrimaryButton.scss';

const PrimaryButton = ({ text, onClick, disabled, color, width }) => {
  const btnColor = color === 'blue' ? css.blue : css.red;

  return (
    <button className={`${css.btn} ${btnColor}`} style={{width: width}} btn-width={width} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

PrimaryButton.propTypes = {
  width: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default PrimaryButton;
