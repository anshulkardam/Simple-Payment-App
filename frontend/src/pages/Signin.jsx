import { Bottomwarning } from "../components/Bottomwarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { Subheading } from "../components/Subheading"

export const Signin = () => {

    return  <div className="bg-slate-600 h-screen flex justify-center">
    <div className=" flex flex-col justify-center ">
        <div className="bg-white w-80 rounded-lg h-max p-4 ">
            <Heading label={"Sign In"} />
            <Subheading label={"Enter your credentials to access your account"} />
            <InputBox title={"Email"} placeholder={"johndoe@example.com"}/>
            <InputBox title={"Password"} placeholder={""}/>            
            <div className="pt-4">
                <Button label={"Sign In"} />
            </div>
            <Bottomwarning label={"Don't have an account?"} buttontext={"Sign Up"} to={"/signup"}/>
        </div>
    </div>
</div>
 }
 