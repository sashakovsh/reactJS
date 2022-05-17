import { ADD_CHAT, DEL_CHAT } from "../actions"
import chatsReducer, {initialState} from "../reducer";

it('Должен быть создан новый чат с именем "test"', () => {
    const action = {
        type: ADD_CHAT,
        payload: 'test'
    };

    const newState = chatsReducer(initialState, action);
    
    expect(newState.chatList[0].name).toBe('test');
});

it('Тестовый чат должен быть удален из списка', () => {
    const action = {
        type: DEL_CHAT,
        payload: 1
    };
    const newState = chatsReducer(initialState, action);

    expect(newState.chatList.length).toBe(0);
})

