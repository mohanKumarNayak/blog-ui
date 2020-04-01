import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import configureStore from './store/configureStore'
import {startGetAll} from './actions/userStoreAction'

const store = configureStore()

store.subscribe(()=>{
    console.log(store.getState())
})
    console.log(store.getState())

store.dispatch(startGetAll())

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('root'));
