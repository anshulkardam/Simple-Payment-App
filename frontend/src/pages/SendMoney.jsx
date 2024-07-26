import { Heading } from "../components/Heading"

export const SendMoney = () => {

    return <div className="bg-slate-400 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="bg-white w-96 h-max rounded-lg shadow-lg p-6">
                <Heading label={"Send Money"} />
                <div className="pt-16">
                    <div className="flex items-center space-x-2">
                        <div className=" w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">A</div>
                        <div className="font-bold text-xl">Friend's Name</div>
                    </div>
                   
                    <div className="font-medium text-sm pt-4">Amount(in Rs)</div>
                    <div className="pt-2">
                        <input placeholder="Enter Amount" className="border border-solid rounded-md p-2 w-full"></input>
                    </div>
                    <div className="pt-4">
                        <button type="button" class="w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Transfer</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
