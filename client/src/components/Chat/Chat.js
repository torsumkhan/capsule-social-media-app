import React from "react";
import Header from "../UIComponents/Header";
import Conversations from "./Conversations/Conversations";
import Message from "./Message/Message";
import "./messenger.css";

const Chat = () => {
  return (
    <>
      <Header />
      <div className="chat">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            <Conversations />
            <Conversations />
            <Conversations />
            <Conversations />
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <Message />
              <Message />
              <Message />
            </div>
            <div className="chatBoxBottom"></div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper"></div>
        </div>
      </div>
    </>
  );
};

export default Chat;
