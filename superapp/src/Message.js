const Message = ({text}) => {
    return <div className="message"> 
            <p>{text.author}: {text.text}</p>
        </div>
}

export default Message;