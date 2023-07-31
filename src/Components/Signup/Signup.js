import React, { useState } from 'react';
import {createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import Logo from '../../olx-logo.png';
import './Signup.css';
import { auth, db } from '../../firebase/config';
import {addDoc, collection} from 'firebase/firestore'
import {useNavigate} from 'react-router-dom'


export default function Signup() {

  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [password,setPassword] = useState('');
  const dbRef = (collection(db,'users'))
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    createUserWithEmailAndPassword(auth,email,password).then((result) =>{
    updateProfile(auth.currentUser,{displayName:username}).then(() =>{
        addDoc(dbRef,{
          id:result.user.uid,
          username:username,
          email:email,
          phone:phone
        }).then(()=>{
          navigate('/login')
        })
      })
    })
    e.preventDefault();
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt='hello'></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        {/* <a>Login</a> */}
      </div>
    </div>
  );
}
