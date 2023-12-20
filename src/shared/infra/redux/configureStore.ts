import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import users from '../../../modules/users/redux/reducers';

const reducer = {
  users: users
}

export default function cfgStore(preloadedState={}) {
    return configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
        devTools: process.env.NODE_ENV !== 'prod',
        preloadedState,
    })
}