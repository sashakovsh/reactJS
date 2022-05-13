import { ADD_CHAT, CHATS_UPDATE, DEL_CHAT } from "./actions";

const initialState = {
    chatList: []
};

const chatsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    {
                        id: `id${state.chatList.length + 1}`,
                        name: action.payload
                    }
                ]
            }
        case DEL_CHAT: 
            return {
                ...state,
                chatList: state.chatList.filter(chat => chat.id !== action.payload)
            };
        case CHATS_UPDATE: 
            return {
                ...state,
                chatList: action.payload
            }
        default:
            return state;
    }
}

export default chatsReducer;