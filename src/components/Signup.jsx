import React, { useState } from 'react'
import "./Signup.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [name,setName] = useState("")
  const [pass,setPass] = useState("")
  const navigate = useNavigate()

   const PrintConsole = async (e) => {
    e.preventDefault()
    // console.log(name)
    // console.log(pass)

    try{
      const response = await axios.post("http://localhost:3000/",{
      name:name,password:pass
    })
    if(response.status===200){
      alert(response.data.message)
      navigate('/login')
    }else{
      alert(response.data.message)
    }
    }catch(error){
      console.log(error)
    }
    
   }
  return (
    <div className="signup">
      <form action="">
        <div className="coat">
          <h1>Sign Up</h1>
          <div className="name">
            <label htmlFor="">Name</label>
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
          </div>

          <div className="password">
            <label htmlFor="">Password</label>
            <input type="password" onChange={(e)=>{setPass(e.target.value)}} />
          </div>
          <button onClick={PrintConsole}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Signup
