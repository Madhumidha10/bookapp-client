import {applyMiddleware,combineReducers} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import {composeWithDevTools} from '@redux-devtools/extension'
import { getAllBooksReducers } from './reducers/bookReducers'
import { cartReducer } from './reducers/cartReducers'
import { registerUserReducer,loginUserReducer } from './reducers/userReducers'
import { placeOrderReducer } from './reducers/orderReducer'
const finalReducers=combineReducers({
    getAllBooksReducers:getAllBooksReducers,
    cartReducer:cartReducer,
    registerUserReducer:registerUserReducer,
    loginUserReducer:loginUserReducer,
    placeOrderReducer:placeOrderReducer

})


const initialState={}

const composeEnhancer=composeWithDevTools({})

const store=configureStore({
    reducer:finalReducers},
    initialState,
    composeEnhancer(applyMiddleware(thunk))
    )

export default store;