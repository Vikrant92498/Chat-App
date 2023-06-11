import React from 'react'
import './Chatsection.css'
import profile from './assests/images/pirofile.jpg'
import Chats from './Chats'
function Chatsection() {
  return (
    <div className='chat_section'>
      <div className="chat_header">
        <div className="chat_info">
            <div className="avatar">
                <img src={profile} alt="profile" />
            </div>
            <div className="name">
                <p>Vikrant</p>
                <p>online</p>
            </div>
        </div>
        <div className="chat_options"></div>
      </div>
      <Chats />
      <div className="chat_footer">
        <div className="message_here">
        <form action="" method="post">
            <input type="text" placeholder='Type a message..' id="" />
            <button type="submit"></button>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Chatsection
