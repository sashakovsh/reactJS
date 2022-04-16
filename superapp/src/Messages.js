const Messages = ({ messages }) => {
    return (
            <div className="message">
                {messages.map((el, ind) => (
                    <div className="message-text" key={ind}>
                    <p>{el.author}: {el.text}</p>
                </div>
                ))}                    
            </div>)
}

export default Messages;