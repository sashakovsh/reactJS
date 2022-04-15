import './App.css';
import './Message.css';
import Messages from './Messages';
import React, { useEffect, useState, useRef } from 'react';
import { Button, TextField, Grid, Container, List, ListItemButton,
  ListItemText, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useTheme } from '@emotion/react';

function App() {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState(''); 
  const inputRef = useRef();
  const theme = useTheme();
  const chatsList = [{name: 'Mom', id: 'Mom'}, {name: 'Dad', id: 'Dad'},
  {name: 'robot', id: 'bot'}];
  const handleInput = (event) => {
    setValue(event.target.value);
  };
  const handleSend = () => {
    if (value !== '') {
      const newMessage = {text: value, author: 'Alex'};
      setMessageList([...messageList, newMessage]);
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
  
  return (
    <div className="App">
      <Typography 
        variant="h5" 
        textAlign="center" 
        mt={15} 
        gutterBottom 
        component="h5"
        style={{ color: theme.palette.primary.main}}>
        Вообще не телеграм
      </Typography>
      <Container maxWidth="md" sx={{display: "flex", gap: 10, marginTop: 10}}>
        <Grid sx={{width: 300, height: 600}}>
          <List sx={{ borderRight: 1 }}>
            <Typography variant="h6" textAlign="left">Список чатов</Typography>
            {chatsList.map( (el) => (
              <ListItemButton key={el.id}>
                <ListItemText primary={el.name} />
              </ListItemButton>)
            )}
          </List>
        </Grid>
        <Grid sx={{width: 500, height: 600}}>
          <Grid sx={{display: 'flex'}}>
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
          <Messages messages={messageList} />
        </Grid>
      </Container>  
    </div>
  );
}

export default App;
