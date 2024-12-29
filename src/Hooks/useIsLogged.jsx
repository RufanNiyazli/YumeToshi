import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../Firebase'
function useIsLogged() {
  const[isLogged,setIsLogged]=useState(null)
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
      setIsLogged(!!currentUser)
    })
    return()=> unsubscribe()
    
  },[])
  return isLogged
}

export default useIsLogged
