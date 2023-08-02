import React, { useContext } from 'react';
// import { AuthContext } from '../auth/AuthProvider';
import { AuthContext } from '../store/Context'
import { Navigate, Outlet } from 'react-router-dom';



function ProtectedRoutes() {
  
  const {authState} = useContext(AuthContext);
  console.log(authState);
  

  return (
    authState?.user ? <Outlet></Outlet> : <Navigate to= '/signin'></Navigate>
  )
}

export default ProtectedRoutes