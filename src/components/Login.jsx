import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
  const[name,setName]=useState("")
  const[pass,setPass]=useState("")
  const navigate=useNavigate()

  const someFunc = async (e) =>{
    e.preventDefault()
    console.log(name)
    console.log(pass)
    try{
      const response = await axios.post('http://localhost:3000/login',{
        name:name,password:pass
      })

      if(response.status===200){
        alert("Login successful")
        navigate('/home')
      }else{
        alert("Invalid login")
      }
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className="login">
      <form action="">
        <div className="container">
          <h1>Login</h1>
          <div className="name">
            <label htmlFor="">Name</label>
            <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
          </div>

          <div className="password">
            <label htmlFor="">Password</label>
            <input type="password" onChange={(e)=>{setPass(e.target.value)}} />
          </div>
          <button onClick={someFunc}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Login
