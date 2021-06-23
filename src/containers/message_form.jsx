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
      <div className="message form-group">
        <label className="message-form__current-user" htmlFor="message-input">{this.props.currentUser}</label>
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
