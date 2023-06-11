import React from 'react'
import Sidebar from './Sidebar'
import Chatsection from './Chatsection'
import './Homepage.css'
function Homepage() {
  return (
    <div className='Homepage'>
       <Sidebar/>
       <Chatsection />
    </div>
  )
}

export default Homepage
 