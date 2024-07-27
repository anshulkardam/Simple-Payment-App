export const InputBox = ({title, placeholder, onChange }) => {
    return <div className="py-1">
        <div className="text-sm font-medium py-2">{title}</div>
        <input onChange={onChange} placeholder={placeholder} className="px-2 py-1 rounded-lg border border-solid w-full"></input>
    </div>
}