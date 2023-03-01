import React,{useState} from 'react';
import "../index.css"
import {AiOutlineMenu} from "react-icons/ai"

const Navbar = () => {
    
    const [Down, setDown] = useState(true);
    const onDown = () => {
        setDown(!Down);
    }

  return (
    <div className="flex flex-row fixed w-full bg-white h-14 shadow-md z-20">
        <div className=" flex flex-row">
            <img className="h-7 w-7 ml-6 my-[10px] hover:cursor-pointer " src="https://i0.wp.com/rollingnotes.in/wp-content/uploads/2019/04/onlinelogomaker-122918-1437-0140-2000-transparent-e1559236714925.png?fit=100%2C99&ssl=1" alt='logo' />
            <span className="h-14 w-28 text-base font-[1000] mx-2 my-[10px] hover:cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">RollingNotes</span>
        </div>

        <div className="justify-end my-[13px] ml-[254px] mr-[0px] sm:hidden lg:inline min-w-[600px] ">
            <ul className="flex flex-row font-extrabold">
                <li className="text-[#54595f] hover:text-[#39c7ce] text-[9px] px-6 py-1 hover:cursor-pointer hover:border-yellow-300 border-b-4 transition duration-300 border-transparent translate-x-6 delay-100 " > HOME</li>
                <li className="text-[#54595f] hover:text-[#39c7ce] text-[9px] px-6 py-1 hover:cursor-pointer hover:border-yellow-300 border-b-4 transition duration-300 border-transparent translate-x-6 delay-100 "> PREVIOUS QUESTION PAPERS</li>
                <li className="text-[#54595f] hover:text-[#39c7ce] text-[9px] px-6 py-1 hover:cursor-pointer hover:border-yellow-300 border-b-4 transition duration-300 border-transparent translate-x-6 delay-100 "> BOARD/UNIVERSITY</li>
                <li className="text-[#54595f] hover:text-[#39c7ce] text-[9px] px-6 py-1 hover:cursor-pointer hover:border-yellow-300 border-b-4 transition duration-300 border-transparent translate-x-6 delay-100 "> OTHER STUDY MATERIAL</li>
                <li className="text-[#54595f] hover:text-[#39c7ce] text-[9px] px-6 py-1 hover:cursor-pointer hover:border-yellow-300 border-b-4 transition duration-300 border-transparent translate-x-6 delay-100 "> FEEDBACK </li>
            </ul>
        </div>

        <div className="inset-x-0 my-[7px] left-[50%] w-fit lg:hidden hover:text-[#39c7ce] hover:cursor-pointer absolute">
            <AiOutlineMenu onClick={onDown} className="w-fit hover:border-[#39c7ce] p-1 text-4xl border-2 rounded-full" />
        </div>

        <div className={Down ? "items-center z-20 h-[255px] px-6 mt-4 w-full inset-x-0 fixed transition duration-500 translate-y-8 bg-white lg:hidden sm:hidden" : "items-center z-20 h-[255px] px-6 mt-4 w-full inset-x-0 fixed transition duration-500 translate-y-8 bg-white"}>
            <ul className="flex flex-col font-extrabold justify-start">
                <li className=" hover:bg-[#39c7ce] text-[14px] py-3 hover:cursor-pointer transition duration-300 text-[#39c7ce] hover:text-white w-full"> HOME</li>
                <li className=" hover:bg-[#39c7ce] text-[14px] py-3 hover:cursor-pointer transition duration-300 text-[#39c7ce] hover:text-white w-full"> PREVIOUS QUESTION PAPERS</li>
                <li className=" hover:bg-[#39c7ce] text-[14px] py-3 hover:cursor-pointer transition duration-300 text-[#39c7ce] hover:text-white w-full"> BOARD/UNIVERSITY</li>
                <li className=" hover:bg-[#39c7ce] text-[14px] py-3 hover:cursor-pointer transition duration-300 text-[#39c7ce] hover:text-white w-full"> OTHER STUDY MATERIAL</li>
                <li className=" hover:bg-[#39c7ce] text-[14px] py-3 hover:cursor-pointer transition duration-300 text-[#39c7ce] hover:text-white w-full"> FEEDBACK </li>
            </ul>
        </div>

        <div className="justify-end my-[14px]">
            <ul className="flex flex-row">
                <li className="text-[9px] px-4 py-1 hover:cursor-pointer transition duration-300 delay-100 "></li>
                <li className="text-[9px] px-4 py-1 hover:cursor-pointer transition duration-300 delay-100 "></li>
                <li className="text-[9px] px-4 py-1 hover:cursor-pointer transition duration-300 delay-100 "></li>
                <li className="text-[9px] px-4 py-1 hover:cursor-pointer transition duration-300 delay-100 "></li>
                <li className="text-[9px] px-4 py-1 hover:cursor-pointer transition duration-300 delay-100 "></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar