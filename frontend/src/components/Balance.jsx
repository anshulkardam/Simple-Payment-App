import axios from "axios"
import { useEffect, useState } from "react"

export function Balance() {
    const [balance, setBalance] = useState(0)
    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/account/balance",{
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }).then(response => { setBalance(response.data.balance)})

    },[])
    

    return <div className="flex ">
        <div className="flex text-xl font-bold p-8">Your Balance</div>
        <div className="ml-6 font-semibold pt-8 text-xl">Rs {balance}</div>
    </div>



}