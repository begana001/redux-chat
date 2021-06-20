import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../actions';

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
    this.setState({ value: '' });
  }

  render() {
    return (
      <form className="message-form form-group" onSubmit={this.handleSubmit} >
        <label className="message-form__current-user" htmlFor="message-input">{this.props.currentUser}</label>
        <input
          id="message-input"
          type="text"
          className="message-form__input form-control"
          placeholder="type your message"
          onChange={this.handleChange}
        />
        <button type="submit" className="btn btn-primary">SEND</button>
      </form>
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
