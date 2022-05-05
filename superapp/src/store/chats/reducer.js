import { ADD_CHAT, DEL_CHAT } from "./actions";

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
            }
        default:
            return state;
    }
}

export default chatsReducer;