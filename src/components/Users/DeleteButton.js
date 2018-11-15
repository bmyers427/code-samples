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

  handleDeleteUser = () => {
    const { deleteUser } = this.props;
    deleteUser();
  }

  render () {
    return (
      <div>
        <PrimaryButton
          text="Delete"
          onClick={this.handleOpenModal}
          color='red'
        />
      <Modal
          ariaHideApp={false}
          isOpen={this.state.showModal}
          style={customStylesModal}
        >
          <h1>Are You Sure You Want To Delete This User?</h1>
          <PrimaryButton
            text="Yes"
            onClick={this.handleDeleteUser}
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
  deleteUser: PropTypes.func.isRequired,
};

// const props = {};
// ReactDOM.render(<DeleteButton {...props} />, document.getElementById('main'));
export default DeleteButton;
