import React, {useState, useRef, useEffect} from "react";
import {Button, TextField, Grid} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/messages/actions";

const ControlPanel = () => {
  let {chatId} = useParams();
  const [value, setValue] = useState(''); 
  const inputRef = useRef();
  const dispatch = useDispatch();
  const author = useSelector(state => state.profile.name);
  const isChatsExist = useSelector(state => state.chats.chatList.length); 
  const messages = useSelector(state => state.messages.messageList);
  
  const handleInput = (event) => {
    setValue(event.target.value);
  };
  const handleSend = () => {
    if (value !== '') {
      const newMessage = {text: value, author};
      dispatch(addMessage(chatId, newMessage));
      setValue('');
      inputRef.current?.focus();
    }
  };
  const handleEnter = (ev) => { // Отправка по нажатию на Enter
    if (ev.keyCode === 13) {
      handleSend();
    }
  };

  useEffect( () => {
    inputRef.current?.focus();
  }, []);

  useEffect( () => {
    let timer;
    if(messages?.length > 0 
      && messages[messages.length - 1].author !== 'bot') {
        const newMessage = {text: 'Я робот', author: 'bot'};
        timer = setInterval( () => {
          dispatch(addMessage(chatId, newMessage))}, 1000);
      }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    } 
  });

    if(isChatsExist ? chatId : false) {
        return (
            <div>
                <Grid className="chat-input">
                    <TextField 
                        variant="standard"
                        size="small" 
                        label="Ваше сообщение" 
                        onChange={handleInput} 
                        onKeyDown={handleEnter}
                        value={value}
                        inputRef={inputRef}
                        autoFocus
                    />
                    <Button 
                        onClick={handleSend} 
                        variant="text"
                    ><SendIcon fontSize="small"/></Button>
                </Grid>
            </div>
        )       
    } else {
        return (
            <div className="no-chat">
                Выберите чат
            </div>
        );
    }
}

export default ControlPanel;