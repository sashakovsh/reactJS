import { addMessage, ADD_MESSAGE } from "../store/messages/actions"

const middleware = (store) => (next) => (action) => {
    if (action.type === ADD_MESSAGE &&
        action.payload.message.authorName !== 'bot') 
        {
            const botMessage = {
                text: 'Ну вроде работает',
                authorName: 'bot'
            } 
            setTimeout(
                () => store.dispatch(addMessage(action.payload.chatId, botMessage)), 1500
                
            );
        };
   

    return next(action);
}

export default middleware;