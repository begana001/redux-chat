import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import ChannelList from '../containers/channel_list.jsx';
import MessageList from '../containers/message_list.jsx';

const App = () => {
  return (
    <div className="app row">
      <h1 className="title"><FontAwesomeIcon icon={faCoffee} />Redux Chat</h1>
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
