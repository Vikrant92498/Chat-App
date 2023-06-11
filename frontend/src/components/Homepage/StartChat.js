import React, { useState } from 'react';
import './StartChat.css'
const ChatPopup = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [username, setUsername] = useState('');

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission with the entered username
    console.log('Submitted username:', username);
    // Reset the form and close the popup
    setUsername('');
    setPopupOpen(false);
  };

  return (
    <div className="chat-popup">
        <div className="chat-popup-content">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={handleInputChange}
            />
            <button type="submit">Start Chat</button>
          </form>
        </div>
    </div>
  );
};

export default ChatPopup;
