import React from 'react'
import './chatList.css'
import profile from './assests/images/pirofile.jpg'
function chatList() {
  return (
      <div className="chat">
            <div className="profile">
            <img src={profile} alt="profile" />
            </div>
            <div className="sidebarChat_info">
                <h5>Room Name</h5>
                <p>This is the last message</p>
            </div>
            <div className="timestamp">
                12:24 AM
            </div>
        </div>
    
  )
}

export default chatList
