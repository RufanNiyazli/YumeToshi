import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useIsLogged from '../../Hooks/useIsLogged'

function MainLayout() {
    const isLogged=useIsLogged()
    console.log(isLogged);
    
    if (isLogged==null) {
        return null
        
    }
    if (!isLogged) {
        return <Navigate to={'/login'} replace/>        
    }
  return <Outlet/>
}

export default MainLayout
