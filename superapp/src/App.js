import './App.css';
import './Message.css';
import Message from './Message';
import React, { useEffect, useState } from 'react';

function App() {
  const [messageList, setMessageList] = useState([]);
  const [value, setValue] = useState(''); 

  const handleInput = (event) => {
    setValue(event.target.value);
  };
  const handleSend = () => {
    if (value !== '') {
      const newMessage = {text: value, author: 'Alex'};
      setMessageList([...messageList, newMessage]);
      setValue(''); 
    }
  };
  useEffect( () => {
    let timer;
    if(messageList.length > 0 
      && messageList[messageList.length - 1].author !== 'bot') {
        timer = setInterval( () => {
          setMessageList([...messageList, newMessage])}, 2000);
        const newMessage = {text: 'Я робот', author: 'bot'};
      }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    }
  })
  
  return (
    <div className="App">
      <header className="App-header">
        <h3>Чат с роботом</h3>
        {messageList.map( (el, ind) => <Message text={el} key={ind}/>)}
        <input 
          placeholder={'Ваше сообщение'} 
          onChange={handleInput} 
          value={value} />
        <button onClick={handleSend}>Отправить</button>
      </header>
    </div>
  );
}

export default App;
