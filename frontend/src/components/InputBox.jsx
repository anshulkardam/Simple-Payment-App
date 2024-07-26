export const InputBox = ({title, placeholder }) => {
    return <div className="py-1">
        <div className="text-sm font-medium py-2">{title}</div>
        <input placeholder={placeholder} className="px-2 py-1 rounded-lg border border-solid w-full"></input>
    </div>
}