import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';

import Message from '../components/message.jsx';
import MessageForm from './message_form.jsx';

class MessageList extends Component {
  componentWillMount() {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  render() {
    if(this.props.messages.length === 0) {
      return (
        <div className="messages__container col-sm-9">
          <div className="selected-channel">
            {this.props.selectedChannel}
          </div>
          <h1>Welcome to the channel. Start conversation!</h1>
          <MessageForm />
        </div>
      );
    }

    return (
      <div className="messages__container col-sm-9">
        <div className="selected-channel">
          {this.props.selectedChannel}
        </div>
        {this.props.messages.map((message) => {
          return <Message message={message} key={message.created_at} />
        })}
        <MessageForm />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
