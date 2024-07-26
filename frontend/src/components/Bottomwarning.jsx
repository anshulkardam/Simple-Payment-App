import { Link } from "react-router-dom"
export function Bottomwarning ({label, buttontext, to}) {
    return <div className="flex justify-center py-2">
        <div className="">{label}</div>
        <Link className="cursor-pointer pl-1 underline" to={to}>{buttontext}</Link>
    </div>
}