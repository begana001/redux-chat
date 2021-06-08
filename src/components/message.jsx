import React from 'react';

const Message = (props) => {
  return (
    <div className="message">
      <div className="message__info">
        <p>{props.message.author}</p>
        <p>{props.message.created_at}</p>
      </div>
      <p className="message__content">{props.message.content}</p>
    </div>
  );
};

export default Message;
