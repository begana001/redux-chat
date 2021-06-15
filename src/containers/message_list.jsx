import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';

import Message from '../components/message.jsx';
import MessageForm from './message_form.jsx';

class MessageList extends Component {
  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  render() {
    if(this.props.messages.length === 0) {
      return (
        <div className="messages__container col-sm-9">
          <div className="selected-channel">
            {this.props.selectedChannel}
          </div>
          <div className="messages__content" ref={(list) => { this.list = list; }}>
            <h1>Welcome to the channel. Start conversation!</h1>
          </div>
          <MessageForm />
        </div>
      );
    }

    return (
      <div className="messages__container col-sm-9">
        <div className="selected-channel">
          {this.props.selectedChannel}
        </div>
        <div className="messages__content" ref={(list) => { this.list = list; }}>
          {this.props.messages.map((message) => {
            return <Message message={message} key={message.created_at} />
          })}
        </div>
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
