import React from 'react'

const Main = () => {
  return (
    <div className="flex flex-col justify-center hover:cursor-default">
        <p className="mt-1.5 text-[#7c7c7c] text-xs text-center">Select Your Subject Here:</p>

        <div className="mt-[30px] justify-around flex">
            <button className="b py-4 px-12 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-md transition duration-300 font-bold text-[#1da1f2]/70 hover:text-white hover:bg-[#1da1f2]">B. Com</button>
            <button className="b py-4 px-12 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-md transition duration-300 font-bold text-[#1da1f2]/70 hover:text-white hover:bg-[#1da1f2]">M. Com</button>
            <button className="b py-4 px-16 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-md transition duration-300 font-bold text-[#1da1f2]/70 hover:text-white hover:bg-[#1da1f2]">B.A</button>
            <button className="b py-4 px-16 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-md transition duration-300 font-bold text-[#1da1f2]/70 hover:text-white hover:bg-[#1da1f2]">LLB</button>
            <button className="b py-4 px-14 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-md transition duration-300 font-bold text-[#1da1f2]/70 hover:text-white hover:bg-[#1da1f2]">B. Sc</button>
        </div>

        <h className="hover:cursor-default text-center text-[10px] font-semibold text-[#c8c8c8] mt-12">Previous Year Question Papers from B.Com (Both CBCS and Regular)</h>
        <h1 className="hover:cursor-default text-center text-[#9c9c9c]/10 text-6xl font-bold inset-y-0">B.COM</h1>
        <h1 className="absolute inset-x-0 top-[482px] leading-9 font-['Montserrat'] text-center text-[30px] font-[600] text-[#3a3a3a]">Bachelor of Commerce</h1>
        <h1 className="text-[#c8c8c8] text-[12px] text-center font-bold mt-4">Under CBCS System</h1>
    </div>
  )
}

export default Main;
