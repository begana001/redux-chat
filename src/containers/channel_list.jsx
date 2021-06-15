import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel, fetchMessages } from '../actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

class ChannelList extends Component {
  componentWillMount() {
    this.props.selectChannel(this.props.selectedChannel);
  }

  handleClick = (e) => {
    this.props.selectChannel(e.currentTarget.innerText);
  }

  handleActive = (channel) => {
    if(channel === this.props.selectedChannel) {
      return <p className="selected">></p>
    }
  }

  renderChannel = (channel) => {
    return (
      <li
      key={channel}
      className={channel === this.props.selectedChannel ? "channel selected" : "channel" }
      onClick={this.handleClick}
      >
        {this.handleActive(channel)}
        {channel}
      </li>
    );
  }

  render() {
    return (
      <div className="channels col-sm-3">
        <ul>
          <h3 className="channels__title">channels</h3>
          {this.props.channels.map((channel) => this.renderChannel(channel))}
        </ul>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel, fetchMessages }, dispatch);
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
