import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Notification from './Notification';
import PrimaryButton from './PrimaryButton';

class DownloadCSV extends Component {
  handleDownload = () => {
    const { downloadCSV } = this.props;
    downloadCSV()
    .then(() => {})
    .catch(() => {});
  }

  render () {
    const { isLoading, error } = this.props;
    return(
      <div>
        {error && <Notification error={error}/>}

        <PrimaryButton
          disabled={isLoading}
          text="Test CSV Download"
          onClick={() => this.handleDownload()}
        />
      </div>
    );
  }
}

DownloadCSV.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  downloadCSV: PropTypes.func.isRequired
};

export default DownloadCSV;