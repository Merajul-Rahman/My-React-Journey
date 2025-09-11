import { useState } from "react"

export default function Counter()
{
    const [count, setCount] = useState(0);

    const decrement = ()=>{
        setCount(count-1)
    }
    const reset = ()=>{
        setCount(0)
    }
    const increment = ()=>{
        setCount(count+1)
    }


    return (
        <>
            <h1 className="text-3xl p-4 mx-auto text-center  shadow-xl mb-5 bg-[#b8e2faff] rounded">Counter</h1>
            <h1 className="text-9xl text-center">{count}</h1>
            <div className="flex gap-5 justify-center items-center mx-auto mt-10">
                <button onClick={decrement} className="px-4 py-2 bg-blue-500 text-white rounded shadow-xl hover:shadow-2xl cursor-pointer hover:scale-105 transition transform duration-300 ease-in-out">Decrement</button>
                <button onClick={reset} className="px-4 py-2 bg-gray-500 text-white rounded shadow-xl hover:shadow-2xl cursor-pointer hover:scale-105 transition transform duration-300 ease-in-out">Reset</button>
                <button onClick={increment} className="px-4 py-2 bg-green-500 text-white rounded shadow-xl hover:shadow-2xl cursor-pointer hover:scale-105 transition transform duration-300 ease-in-out">Increment</button>
            </div>

            
        </>
        
    )
}