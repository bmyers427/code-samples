import React, { Component } from 'react';
import Modal from 'react-modal';
import PrimaryButton from '../Buttons/PrimaryButton';
import PropTypes from 'prop-types';

const customStylesModal = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -100%)'
  }
};

class DeleteButton extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  handleDeleteArticle = () => {
    const { deleteArticle } = this.props;
    deleteArticle();
  }

  render () {
    return (
      <div>
        <PrimaryButton
          text="Delete"
          onClick={this.handleOpenModal}
          color='red'
          width='84px'
        />
      <Modal
          ariaHideApp={false}
          isOpen={this.state.showModal}
          style={customStylesModal}
        >
          <h1>Are You Sure You Want To Delete This Article?</h1>
          <PrimaryButton
            text="Yes"
            onClick={this.handleDeleteArticle}
            color='red'
            width='47%'
          />
          <PrimaryButton
            text="No"
            onClick={this.handleCloseModal}
            width='47%'
            color='blue'
          />
        </Modal>
      </div>
    );
  }
}

DeleteButton.propTypes = {
  deleteArticle: PropTypes.func.isRequired,
};

// const props = {};
// ReactDOM.render(<DeleteButton {...props} />, document.getElementById('main'));
export default DeleteButton;
