export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const DEL_CHAT = 'CHATS::DELETE_CHAT';
export const CHATS_UPDATE = 'CHATS::UPDATE_CHAT';

export const addChat = (name) => ({
    type: ADD_CHAT,
    payload: name
})

export const deleteChat = (id) => ({
    type: DEL_CHAT,
    payload: id
})

export const chatListUpdate = (chats) => ({
    type: CHATS_UPDATE,
    payload: chats
})