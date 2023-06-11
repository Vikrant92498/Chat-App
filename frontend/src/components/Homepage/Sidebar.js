import React from 'react'
import './Sidebar.css'
import profile from './assests/images/pirofile.jpg'
import ChatBox from './chatList'
import StartChat from './StartChat'
function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar_header">
            <div className="avatar">
                <img src={profile} alt="profile" />
            </div>
            <div className="settings"></div>
        </div>
        <StartChat/>
    <div className="chatlist">
        <ChatBox/>
        <ChatBox/>
        <ChatBox/>
        <ChatBox/>
        <ChatBox/>
        <ChatBox/>
    </div>
   </div>
  )
}

export default Sidebar
