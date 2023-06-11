import './Register.css'
import axios from 'axios'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    password: '',
    reentered: ''
  });

  const handleNameChange = (event) => {
    setUser({ ...user, username: event.target.value });
    console.log(user)
  };

  const handlePasswordChange = (event) => {
    setUser({ ...user, password: event.target.value });
    console.log(user)
  };

  const handleReenteredChange = (event) => {
    setUser({ ...user, reentered: event.target.value });
    console.log(user)
  };

  const handleSubmit = (event) => {
    
    const password=user.password;
    const reentered=user.reentered;
    const username=user.username;
    console.log(password,reentered)

    if(username && password===reentered){
      axios.post('http://localhost:9000/register',user)
      .then(res=>console.log(res))
    }
    else { console.log("Error")}
    
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={user.username}
          onChange={handleNameChange}
          required
        />
        <input type="password" placeholder="Password" value={user.password} onChange={handlePasswordChange} required/>
        <input
          type="password"
          placeholder="Re-enter Password"
          value={user.reentered}
          onChange={handleReenteredChange}
          required
        />
        <div className="button-container">
          <button type="submit" onClick={handleSubmit}>Register</button>
          <button type="button" onClick={()=>navigate.push('/login')}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
