import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { receiveMessage } from '../Features/ChatSlice';
import ChatMessages from './ChatMessage';
import ChatInput from './ChatInput';

const ChatWindow = () => {
  const messages = useSelector((state) => state.chat.messages);
  const dispatch = useDispatch();

   
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(receiveMessage('This is an automated response.'));
    }, 2000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div className="flex flex-col w-full h-full max-w-lg mx-auto border shadow-lg rounded-lg bg-white">
      <div className="flex-grow overflow-y-auto p-4">
        <ChatMessages messages={messages} />
      </div>
      <ChatInput />
    </div>
  );
};

export default ChatWindow;
