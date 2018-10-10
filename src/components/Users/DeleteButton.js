import React, { Component } from 'react';
import Modal from 'react-modal';
import PrimaryButton from '../Buttons/PrimaryButton';
import PropTypes from 'prop-types';

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
        >
          <h1>Permanently Delete This User?</h1>
          <PrimaryButton
            text="Yes"
            onClick={this.handleDeleteUser}
            color='red'
          />
          <PrimaryButton
            text="No"
            onClick={this.handleCloseModal}
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
