import React from "react";
import { Container } from '@mui/material';
import ControlPanel from "../components/ControlPanel";
import ChatsList from "../components/ChatsListComponent";
import MessageList from "../components/MessageList";

const Chats = () => {

    return (
      <Container maxWidth="md" sx={{display: "flex", gap: 10, marginTop: 10}}>
        <ChatsList />    
        <div className="chats-body">
          <MessageList />    
          <ControlPanel />
        </div>
      </Container>
    )
};

export default Chats;