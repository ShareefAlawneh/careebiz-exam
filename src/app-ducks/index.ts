import {compose, createStore} from 'redux';
import rootReducers from './reducers'
const windowObj = window as any
const composeEnhancers = windowObj.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducers, composeEnhancers())