/**
 * Created with comment
 * @author: 武扬/956826374@qq.com
 * @time: 2018/10/15 上午10:44
 */
import {createStore, applyMiddleware, compose} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from '../storage'

import rootReducer from '../reducer'
import initStore from './initStore'


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const createStoreWithMiddleware = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)(createStore);

const store = createStoreWithMiddleware(persistedReducer, initStore);

export const persistor = persistStore(store);
export default store
