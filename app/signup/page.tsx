"use client"
import axios from "axios"
import { useState } from "react"


export default function Signup(){
    const [username ,setusername] = useState("")
    const [password , setpassword] = useState("")




    return <div className="w-screen h-screen flex 
justify-center items-center">


        <div className="border p-2">
            <input type="text" placeholder="username" 
            onChange= {e=> {setusername(e.target.value)}}> 
            </input>

              <input type="password" placeholder="password" 
              onChange={e=>{setpassword(e.target.value)}}>

              </input>


              <button onClick={()=>{
                axios.post("http://localhost:3000/api/v1/signup", {
                    username,
                    password
                })




              }}>Sign up</button>
        </div>






    </div>
}