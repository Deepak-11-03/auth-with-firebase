import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Home() {
  const [auth,setAuth] = useState(false)
  useEffect(()=>{
    if(localStorage.getItem('token')){
      setAuth(true)
    }
    else{
      setAuth(false)
    }
  },[])
  return (
    <div style={{textAlign:"center"}}>
        <h1>Home Page</h1>

       {auth &&  <h3>Hello world</h3>}
    </div>
  )
}

export default Home
