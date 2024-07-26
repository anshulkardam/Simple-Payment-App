export const Appbar = () => {

    return <div className="flex justify-between shadow h-14">
        <div className="flex justify-center flex-col font-bold text-xl h-full ml-4"> Payments App</div>
        <div className="flex">
            <div className="flex justify-center flex-col font-semibold mr-5 h-full" >Hello, User</div>
            <div className="w-10 h-10 bg-green-500 rounded-full flex justify-center items-center mr-4 mt-2 ">
                <div className="font-semibold"> U</div>
            </div>
        </div>
    </div>
}
