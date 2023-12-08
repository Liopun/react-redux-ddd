import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import users from '../../../modules/users/redux/reducers';
import posts from '../../../modules/posts/redux/reducers';

const reducer = {
  users: users,
  posts: posts
}

export default function cfgStore(preloadedState={}) {
    return configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
        devTools: process.env.NODE_ENV !== 'prod',
        preloadedState,
    })
}  