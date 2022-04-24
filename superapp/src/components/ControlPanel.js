import React, {useState, useRef, useEffect} from "react";
import {Button, TextField, Grid} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useParams } from "react-router-dom";

const ControlPanel = ({addMessage, chats}) => {
  let {chatId} = useParams();
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState(''); 
  const inputRef = useRef();
  const handleInput = (event) => {
    setValue(event.target.value);
  };
  const handleSend = () => {
    if (value !== '') {
      const newMessage = {text: value, author: 'Alex'};
      addMessage(chatId, newMessage);
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
    if(messageList.length > 0 
      && messageList[messageList.length - 1].author !== 'bot') {
        timer = setInterval( () => {
          setMessageList([...messageList, newMessage])}, 1000);
        const newMessage = {text: 'Я робот', author: 'bot'};
      }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    }
  });
    if(chats[chatId]) {
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