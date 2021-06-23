import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit = (e) => {
    //TODO: fetch post request
    e.preventDefault();
    this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.value);
    document.querySelector('.message-form').reset();
  }

  render() {
    return (
      <div className="sending-message form-group">
        <label className="message-form__current-user" htmlFor="message-input"><FontAwesomeIcon icon={faUser} className="message-from__current-user-icon" />  {this.props.currentUser}</label>
        <form className="message-form" onSubmit={this.handleSubmit} >
          <input
            id="message-input"
            type="text"
            className="message-form__input form-control"
            placeholder="type your message"
            onChange={this.handleChange}
          />
          <button type="submit" className="message-form__submit-button btn btn-primary">SEND</button>
        </form>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel,
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
