import { Bottomwarning } from "../components/Bottomwarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { Subheading } from "../components/Subheading"

export const Signup = () => {

    return <div className="bg-slate-600 h-screen flex justify-center">
        <div className=" flex flex-col justify-center ">
            <div className="bg-white w-80 rounded-lg h-max p-4 ">
                <Heading label={"Sign Up"} />
                <Subheading label={"Enter your information to  create an account"} />
                <InputBox title={"First Name"} placeholder={"John"}/>
                <InputBox title={"Last Name"} placeholder={"Doe"}/>
                <InputBox title={"Email"} placeholder={"johndoe@example.com"}/>
                <InputBox title={"Password"} placeholder={""}/>
                
                <div className="pt-4">
                    <Button label={"Sign Up"} />
                </div>
                <Bottomwarning label={"Already have an account?"} buttontext={"Login"} to={"/signin"} />
            </div>
        </div>
    </div>
}