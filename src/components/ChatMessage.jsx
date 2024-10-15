

const ChatMessages = ({ messages }) => {
  return (
    <div className="space-y-3">
      {messages.map((message) => (
        <div key={message.id} className={`flex ${message.user === 'user' ? 'justify-end' : 'justify-start'}`}>
          <div className={`p-3 rounded-lg ${message.user === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
            <p>{message.content}</p>
            <span className="text-xs text-gray-500">{message.timestamp}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
