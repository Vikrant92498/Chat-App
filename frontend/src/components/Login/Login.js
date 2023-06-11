import './Login.css'
import axios from 'axios'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login =({setLoginUser})=> {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const handleNameChange = (event) => {
    setUser({ ...user, username: event.target.value });
    console.log(user)
  };

  const handlePasswordChange = (event) => {
    setUser({ ...user, password: event.target.value });
    console.log(user)
  };
  const handleSubmit = (event) => {
    
    const password=user.password;
    const username=user.username;
    

    if (username && password) {
      axios.post('http://localhost:9000/login', user)
        .then((res) => {
          alert("hello")
          setLoginUser(res.data.user);
          navigate.push('/');
        }) 
        .catch((error) => {
          console.log("Error:", error);
        });
    } else {
      console.log("Error");
    }
  };

  return (
    <div className="login-container">
    <h2>Login</h2>
    <form>
      <div className="form-group">
        <label  htmlFor="username">Username</label>
        <input type="text" id="username" name="username" value={user.username} onChange={handleNameChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={user.password} onChange={handlePasswordChange} name="password" required />
      </div>
      <div className="form-group">
        <input type="submit" onClick={handleSubmit} value="Login" />
      </div>
    </form>
    <div  className="register-link" onClick={()=>navigate.push('/register')}>
      Register
    </div>
  </div>
  )
}

export default Login
