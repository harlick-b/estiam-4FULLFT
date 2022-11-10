import React from "react";
import Message from "./Message";

const Messages = (props) => {
  const { messages } = props;

  return (
    <div className="main">
      {messages.map((msg, key) => <Message key={key} message={msg.message} />)}
    </div>
  )
};

export default Messages;
