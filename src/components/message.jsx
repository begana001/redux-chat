import React from 'react';

const Message = (props) => {
  const createdAt = props.message.created_at.split('T');
  const date = createdAt[0];
  const time = createdAt[1].split('.')[0];
  return (
    <div className="message">
      <div className="message__info">
        <p>{props.message.author}</p>
        <p>{date} {time}</p>
      </div>
      <p className="message__content">{props.message.content}</p>
    </div>
  );
};

export default Message;
