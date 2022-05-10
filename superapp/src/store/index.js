import { createStore, 
    combineReducers, 
    // compose, 
    applyMiddleware } from "redux";
import chatsReducer from "./chats/reducer";
import messagesReducer from "./messages/reducer";
import profileReducer from "./profile/reducer";
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import createSagaMiddleWare from 'redux-saga';
import mySaga from "./sagas";
import { persistStore, persistReducer} from 'redux-persist';
import catsFactsReducer from "./api/reducer";

const sagaMiddleware = createSagaMiddleWare();

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers( {
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    cats: catsFactsReducer,
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducers = persistReducer(persistConfig, reducers)

const store = createStore(
    persistedReducers,
    applyMiddleware(sagaMiddleware, thunk)
)

export default store;

export const persistor = persistStore(store);

sagaMiddleware.run(mySaga);