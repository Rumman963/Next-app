"use client"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"



export default function Signup(){
    const [username ,setusername] = useState("")
    const [password , setpassword] = useState("")
    const router = useRouter();




    return <div className="w-screen h-screen flex 
justify-center items-center">


        <div className="border p-2">
            <input type="text" placeholder="username" 
            onChange= {e=> {setusername(e.target.value)}}> 
            </input>

              <input type="password" placeholder="password" 
              onChange={e=>{setpassword(e.target.value)}}>

              </input>


                            <button onClick={ async ()=>{
                                try {
                                    await axios.post("/api/v1/signup", {
                                        username,
                                        password
                                    })

                                    router.push("/signin")
                                } catch (error) {
                                    console.error("Signup failed", error)
                                }



              }}>Sign up</button>
        </div>






    </div>
}