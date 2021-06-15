import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel, fetchMessages } from '../actions';

class ChannelList extends Component {
  componentWillMount() {
    this.props.selectChannel(this.props.selectedChannel);
  }

  handleClick = (e) => {
    this.props.selectChannel(e.currentTarget.innerHTML);
  }

  renderChannel = (channel) => {
    return (
      <li
        key={channel}
        className={channel === this.props.selectedChannel ? "selected" : null }
        onClick={this.handleClick}
      >
        {channel}
      </li>
    );
  }

  render() {
    return (
      <div className="channels col-sm-3">
        <ul>
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
