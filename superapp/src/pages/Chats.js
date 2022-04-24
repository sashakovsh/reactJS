import React from "react";
import { Container } from '@mui/material';
import ControlPanel from "../components/ControlPanel";
import ChatsList from "../components/ChatsList";
import MessageList from "../components/MessageList";

const Chats = ({chats, addMessage}) => {

    return (
      <Container maxWidth="md" sx={{display: "flex", gap: 10, marginTop: 10}}>
        <ChatsList chats={chats} />    
        <div className="chats-body">
          <MessageList chats={chats} />    
          <ControlPanel addMessage={addMessage} chats={chats} />
        </div>
      </Container>
    )
};

export default Chats;