import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export function Users() {

    const [users, setUsers] = useState([])
    const [filter, setFilter] = useState("")


    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter , {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then(response => {
                setUsers(response.data.user)
            })
    }, [filter])

    return <div>
        <div className="text-xl font-bold pl-8">Users</div>
        <div className="pl-8 pt-6">
            <input onChange={(e) => { setFilter(e.target.value) }} placeholder="Search Users..." className="border border-solid w-full rounded-lg p-2"></input>
        </div>
        <div >
            {users.map(user => <User users={user} />)}
        </div>
    </div>
}

function User({ users }) {
    
    const navigate = useNavigate()
    return <div  className="ml-8 mt-5">
        <div className="flex justify-between mt-0">
            <div  className="flex">
                <div className=" w-10 h-10 rounded-full bg-slate-300 items-center font-medium flex justify-center">{users.firstName[0].toUpperCase()}</div>
                <div className="font-medium text-lg ml-4 mt-1 ">{users.firstName}</div>
                <div className="font-medium text-lg ml-1 mt-1 ">{users.lastName}</div>
            </div>
            <button onClick={() => navigate("/send?name=" + users.firstName + "&last=" + users.lastName + "&id=" + users._id)} type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Send Money</button>
        </div>
    </div>

}