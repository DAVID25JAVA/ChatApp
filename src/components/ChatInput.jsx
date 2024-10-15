import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage } from '../Features/ChatSlice';

const ChatInput = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const handleSendMessage = () => {
    if (message.trim()) {
      dispatch(sendMessage(message));
      setMessage('');
    }
  };

  return (
    <div className="p-4 bg-gray-100 flex items-center space-x-3">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
        className="flex-grow p-2 border rounded-lg focus:outline-none"
      />
      <button
        onClick={handleSendMessage}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
