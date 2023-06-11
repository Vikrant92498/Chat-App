import React from 'react'
import './Sidebar.css'
import profile from './assests/images/pirofile.jpg'
function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar_header">
            <div className="avatar">
                <img src={profile} alt="profile" />
            </div>
            <div className="settings"></div>
        </div>
        <div className="searchbar">
            <div className="searchblock">
                <input type="text" name="" id="" />
            </div>
        </div>
    <div className="chatlist">
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
        <div class="chat">
            <div class="profile">
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
        
    </div>
   </div>
  )
}

export default Sidebar
