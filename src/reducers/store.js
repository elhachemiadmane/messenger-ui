import messagesReducer from './messagesReducer';
import { createStore } from 'redux';


let store = createStore(messagesReducer);

export default store;