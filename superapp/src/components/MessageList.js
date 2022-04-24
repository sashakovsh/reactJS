import { useParams } from "react-router-dom";

const MessageList = ({ chats }) => {
    let { chatId } = useParams();

    if(!chats[chatId]) return null;

    const messages = chats[chatId].message;

    return (
        <div className="chat-msg">
            {messages.map((el, ind) => (
                <div className="message-text" key={ind}>
                    <p>{el.author}: {el.text}</p>
                </div>
                )
            )}
        </div>
    )
}

export default MessageList;