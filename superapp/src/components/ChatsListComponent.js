import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addChatWithFB, deleteChatWithFB, initTrackerWithFB } from "../middlewares/middleware";
import { chatList } from "../store/chats/selectors";
import ChatsList from "./ChatsList";

const ChatsListComponent = () => {
    const chats = useSelector(chatList);
    const [visible, setVisible] = useState(false);
    const [chatName, setChatName] = useState('');
    const dispatch = useDispatch();
    const { chatId } = useParams();

    const handleChatName = (e) => {
        setChatName(e.target.value)
    }
    const handleClose = () => {
        setVisible(false)
    }
    const handleOpen = () => {
        setVisible(true)
    }
    const handleDelete = (e) => {
        dispatch(deleteChatWithFB(e.target.closest('a').id))
    }
    const handleSave = () => {
        if(chatName && chatName !== ' ') {
            dispatch(addChatWithFB(chatName));
            setChatName('');
            handleClose()
        }
    }
    const handleEnterPressed = (e) => {
        if(e.keyCode === 13) {
            e.preventDefault()
            handleSave();
            setVisible(false)
        }
    }
    useEffect( () => {
        dispatch(initTrackerWithFB())
    }, [chatId]);
  
    return (<ChatsList 
                chats={chats} 
                handleDelete={() => handleDelete}
                handleOpen={handleOpen} 
                handleClose={handleClose} 
                handleChatName={handleChatName} 
                handleEnterPressed={handleEnterPressed} 
                chatName={chatName} 
                visible={visible} 
                handleSave={handleSave}
            />)
};

export default ChatsListComponent;