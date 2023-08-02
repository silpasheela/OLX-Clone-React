import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
// import { AuthContext } from '../auth/AuthProvider';
import { AuthContext } from '../store/Context'




function PublicRoutes() {

  const {authState} = useContext(AuthContext);
  console.log(authState);

  return (
    !authState?.user ? <Outlet></Outlet> : <Navigate to= '/'></Navigate>
  )
}

export default PublicRoutes