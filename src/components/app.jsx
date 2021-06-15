import React from 'react';

import ChannelList from '../containers/channel_list.jsx';
import MessageList from '../containers/message_list.jsx';

const App = () => {
  return (
    <div className="app row">
      <h1 className="title"><i className="far fa-comments"></i>Redux Chat</h1>
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
