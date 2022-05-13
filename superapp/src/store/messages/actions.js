export const ADD_MESSAGE  = 'MESSAGES::ADD_MESSAGE';
export const ADD_MESSAGE_WITH_SAGA = 'MESSAGES::ADD_MESSAGE_WITH_SAGA';
export const UPDATE_MESSAGES = 'MESSAGES::UPDATE_MESSAGES';

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: { chatId, message}
});

export const addMessageWithSaga = (chatId, message) => ({
    type: ADD_MESSAGE_WITH_SAGA,
    payload: { chatId, message}
});

export const addMessageWithThunk = (chatId, message) => (dispatch, getState) => {
    
    dispatch(addMessage(chatId, message));
  
    if(message.authorName !== 'bot') {
        const botMessage = {
            text: 'Ну вроде работаю из тханка',
            author: 'bot'
        } 
        setTimeout( () => dispatch(addMessage(chatId, botMessage)), 1500)
    }
};

export const updateMessages = (chatId, msg) => ({
    type: UPDATE_MESSAGES,
    chatId,
    msg
})