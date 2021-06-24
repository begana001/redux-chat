import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';

import Message from '../components/message.jsx';
import MessageForm from './message_form.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

class MessageList extends Component {
  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount() {
    this.refresher = setInterval(this.fetchMessages, 1000);
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
          <div className="messages__current-channel">
            <p>#{this.props.selectedChannel}</p> <FontAwesomeIcon icon={faCircle} className="messages__current-channel--online" />
          </div>
          <div className="messages__content" ref={(list) => { this.list = list; }}>
            <h3>Welcome to the #{this.props.selectedChannel} channel. Start conversation!</h3>
          </div>
          <MessageForm />
        </div>
      );
    }

    return (
      <div className="messages__container col-sm-9">
        <div className="messages__current-channel">
          <p>#{this.props.selectedChannel}</p> <FontAwesomeIcon icon={faCircle} className="messages__current-channel--online" />
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
