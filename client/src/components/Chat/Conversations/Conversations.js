import React from "react";
import "./conversations.css";
import { Avatar } from "@material-ui/core";

const Conversations = () => {
  return (
    <div className="conversation">
      <Avatar style={{ marginRight: "20px" }} />
      <span className="conversationName">Torsum</span>
    </div>
  );
};

export default Conversations;
