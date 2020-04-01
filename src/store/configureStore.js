import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk' 
import userStoreReducer from '../reducer/users'

const configureStore = () => {
    const store = createStore(combineReducers({
        userStore:userStoreReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore