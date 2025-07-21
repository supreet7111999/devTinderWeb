import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import connectionReducer from './connectionSlice'
import feedReducer from './FeedSlice'
import requestSlice from './requestSlice'

export const store = configureStore({
  reducer: {
    user:userReducer,
    connection:connectionReducer,
    feed:feedReducer,
    request:requestSlice,
  },
})