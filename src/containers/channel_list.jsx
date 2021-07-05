import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

class ChannelList extends Component {
  componentWillReceiveProps(nextProps) {
    if(nextProps.channelFromParams !== this.props.channelFromParams) {
      this.props.fetchMessages(nextProps.channelFromParams);
    };
  }

  handleActive = (channel) => {
    if(channel === this.props.channelFromParams) {
      return "> "
    }
  }

  handleMouseOver = (e) => {
    e.target.style.backgroundColor = "rgba(169, 214, 229, 0.5)";
  }

  handleMouseOut = (e) => {
    e.target.style.backgroundColor = "";
  }

  renderChannel = (channel) => {
    return (
      <li
      key={channel}
      className={channel === this.props.channelFromParams ? "channel selected" : "channel" }
      >
        <Link to={`/${channel}`} class="channel__link"
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
        >
          {this.handleActive(channel)}
          {channel}
        </Link>
      </li>
    );
  }

  render() {
    return (
      <div className="channels col-sm-3">
        <h3 className="channels__title">channels</h3>
        <ul className="channels__ul">
          {this.props.channels.map((channel) => this.renderChannel(channel))}
        </ul>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

function mapStateToProps(state) {
  return {
    channels: state.channels
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
