import React from "react";
import { Avatar } from "@material-ui/core";
import "./message.css";

const Message = () => {
  return (
    <div className="message">
      <div className="messageTop">
        <Avatar />
        <p className="messageText">Hello</p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  );
};

export default Message;
