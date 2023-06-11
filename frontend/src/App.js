import './App.css';
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link,
} from "react-router-dom";
import { useState } from 'react';
import Homepage  from './components/Homepage/Homepage';
function App() {
  const [user,setLoginUser] =useState({});
  return (
    <Router>
    <div className="Application">
        <Routes>
          <Route exact path='/' element={<Homepage />}> </Route>
          <Route path='/login' element={<Login setLoginUser={setLoginUser}/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
        </Routes>
      
    </div>
    </Router>
  );
}

export default App;