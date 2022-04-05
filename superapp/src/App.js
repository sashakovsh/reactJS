import './App.css';
import Message from './Message.js';
import './Message.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Message text={props.text} />
      </header>
    </div>
  );
}

export default App;
