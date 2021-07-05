import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

import ChannelList from '../containers/channel_list.jsx';
import MessageList from '../containers/message_list.jsx';

const App = (props) => {
  return (
    <div className="app row">
      <h1 className="title">Redux Chat   {/*<FontAwesomeIcon icon={faComments} />*/}</h1>
      <ChannelList channelFromParams={props.match.params.channel} />
      <MessageList channelFromParams={props.match.params.channel} />
    </div>
  );
};

export default App;
