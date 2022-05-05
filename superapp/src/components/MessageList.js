import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { messageList } from "../store/messages/selectors";
import { profile } from "../store/profile/selectors";

const MessageList = () => {
    const allMessages = useSelector(messageList)
    let { chatId } = useParams();
    const { name } = useSelector(profile)

    if(!chatId) return null;

    const messages = allMessages[chatId];

    return (
        <div className="chat-msg">
            {messages?.map((el, ind) => (
                <div className="message-text" key={ind}>
                    <p>{name}: {el.text}</p>
                </div>
                )
            )}
        </div>
    )
}

export default MessageList;