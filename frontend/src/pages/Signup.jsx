import { useState } from "react"
import { Bottomwarning } from "../components/Bottomwarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { Subheading } from "../components/Subheading"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export const Signup = () => {

    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()
    return <div className="bg-slate-600 h-screen flex justify-center">
        <div className=" flex flex-col justify-center ">
            <div className="bg-white w-80 rounded-lg h-max p-4 ">
                <Heading label={"Sign Up"} />
                <Subheading label={"Enter your information to  create an account"} />
                <InputBox onChange={(e) =>{
                    setfirstName(e.target.value)
                }} title={"First Name"} placeholder={"John"}/>
                <InputBox onChange={(e) =>{
                    setlastName(e.target.value)
                }} title={"Last Name"} placeholder={"Doe"}/>
                <InputBox onChange={(e) =>{
                    setUsername(e.target.value)
                }} title={"Email"} placeholder={"johndoe@example.com"}/>
                <InputBox onChange={(e) =>{
                    setpassword(e.target.value)
                }} title={"Password"} placeholder={""}/>
                
                <div className="pt-4">
                    <Button onClick={async ()=> {
                        
                        const response = await axios.post("http://localhost:3000/api/v1/user/signup" , {
                            username,
                            firstName,
                            lastName,
                            password
                        })
                        localStorage.setItem("token" , response.data.token)
                        navigate("/dashboard")
                    }} label={"Sign Up"} />
                </div>
                <Bottomwarning label={"Already have an account?"} buttontext={"Login"} to={"/signin"} />
            </div>
        </div>
    </div>
}
