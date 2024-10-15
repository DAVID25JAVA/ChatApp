import { configureStore } from '@reduxjs/toolkit';
import chatApp from './ChatSlice'

export const store = configureStore({
  reducer: {
    chat: chatApp,
  },
});
