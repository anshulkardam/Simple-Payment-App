import { useState } from "react"
import { Bottomwarning } from "../components/Bottomwarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { Subheading } from "../components/Subheading"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Signin = () => {

        const navigate = useNavigate()
        const [username, setUsername] = useState("")
        const [password, setPassword] = useState("")

    return  <div className="bg-slate-600 h-screen flex justify-center">
    <div className=" flex flex-col justify-center ">
        <div className="bg-white w-80 rounded-lg h-max p-4 ">
            <Heading label={"Sign In"} />
            <Subheading label={"Enter your credentials to access your account"} />
            <InputBox onChange={(e)=>{
                setUsername(e.target.value)
            }} title={"Email"} placeholder={"johndoe@example.com"}/>
            <InputBox onChange={(e)=>{
                setPassword(e.target.value)
            }} title={"Password"} placeholder={""}/>            
            <div className="pt-4">
                <Button onClick={async()=> {
                    const response = await axios.post("http://localhost:3000/api/v1/user/signin" ,{
                        username,
                        password
                    })
                    localStorage.setItem("token", response.data.token)
                    navigate("/dashboard")
                }} label={"Sign In"} />
            </div>
            <Bottomwarning label={"Don't have an account?"} buttontext={"Sign Up"} to={"/signup"}/>
        </div>
    </div>
</div>
 }
 