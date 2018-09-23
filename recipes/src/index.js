import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import './index.css';

import App from './App';

const initialState = {
    token: null,
    userName: 'Guest'
};

const reducer = ( state = initialState, action) => {
    switch (action.type){
        case 'ACTIVATE_TOKEN':{
            return {
                token : action.payload.token,
                userName : action.payload.userName,
            }
        }
        default:{
            return {
                token : state.token,
                userName: state.userName
            }
        }
    }
}

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>
    , document.getElementById('root'));
