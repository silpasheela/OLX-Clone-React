import React, { useState } from 'react'; 
import Logo from '../../olx-logo.png';
import './Login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import {Link, useNavigate} from 'react-router-dom'

function Login() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate()

  const handleLogin =  (e) =>{

    const data =  signInWithEmailAndPassword(auth,email,password);
    data
      .then((data) => {
        console.log(data.user)
          localStorage.setItem('user' , JSON.stringify(auth.currentUser))
      }
    )
    .catch(err => console.log(err))
    try {
      navigate('/')
    } catch (error) {
      alert(error.message)
    }
    e.preventDefault();
  }


  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to={'/signup'}><a style={{color:'black'}}>Signup</a></Link>
      </div>
    </div>
  );
}

export default Login;
