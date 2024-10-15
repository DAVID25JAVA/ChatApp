import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    messages: [
      { id: 1, user: 'bot', content: 'Hello! How can I assist you today?', timestamp: new Date().toLocaleTimeString() },
    ],
    currentUser: 'user',
  };
  
  const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
      sendMessage: (state, action) => {
        state.messages.push({
          id: state.messages.length + 1,
          user: state.currentUser,
          content: action.payload,
          timestamp: new Date().toLocaleTimeString(),
        });
      },
      receiveMessage: (state, action) => {
        state.messages.push({
          id: state.messages.length + 1,
          user: 'bot',
          content: action.payload,
          timestamp: new Date().toLocaleTimeString(),
        });
      },
    },
  });
  
  export const { sendMessage, receiveMessage } = chatSlice.actions;
  export default chatSlice.reducer;
