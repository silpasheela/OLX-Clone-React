import React, { useContext, useEffect } from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import {AuthContext} from './store/Context'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from './firebase/config'
import Post from './store/PostContext'

import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import ViewPost from './Pages/ViewPost'

import AuthProvider  from './auth/AuthProvider'
import PublicRoutes from './Utils/PublicRoutes'
import ProtectedRoutes from './Utils/ProtectedRoutes'


function App() {

  const {setUser} = useContext(AuthContext)
  useEffect(()=>{
    auth.onAuthStateChanged((user) =>{
      setUser(user)
    })
  })


  return (
    <div>
    <AuthProvider>
      <Post>
        <Router>
          <Routes>
            <Route path='/' Component={Home}></Route> 
            <Route element={<PublicRoutes></PublicRoutes>}>
              <Route path='/signup' Component={Signup}></Route> 
              <Route path='/login' Component={Login}></Route> 
            </Route>
            <Route element={<ProtectedRoutes></ProtectedRoutes>}>
              <Route path='/create' Component={Create}></Route> 
              <Route path='/view' Component={ViewPost}></Route> 
            </Route>
          </Routes>
        </Router>
      </Post>
      </AuthProvider>
    </div>
  );
}

export default App;
