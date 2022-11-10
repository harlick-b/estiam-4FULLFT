import React from "react";

const Message = (props) => {
  const { message } = props;

  return (
    <ul>
      <li>{message}</li>
    </ul>
 )
};

export default Message;
