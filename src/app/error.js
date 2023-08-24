'use client';
import { useEffect } from "react"

const Error = ({error, reset}) => {
    useEffect(() => {
        console.log(error);
    }, [error])
    return <div className="text-center mt-10">
        <h1>Something went wrong</h1>
        <button className="px-3 py-2 mt-5 border-2 border-amber-500 rounded text-gray-900 hover:bg-amber-500 hover:text-gray-50 hover:rounded-lg transition-all" onClick={() => reset()}>Try Again</button>
    </div>
}
export default Error