/* eslint-disable react/jsx-pascal-case */
 import React, {useState} from 'react'
 import "../index.css"
 import Bcom_sec from "./Bcom_sec"
 
 const Bcom = () => {

    var [Blue_bor1, setBlue_bor1] = useState(false);
    var onBlue_bor1 = (a)=>{
        setBlue_bor1(Blue_bor1 = a);
    }

    var [Blue_bor3, setBlue_bor3] = useState(true);
    var onBlue_bor3 = (b)=>{
      setBlue_bor3(Blue_bor3 = b)
    }

    var [Blue_bor5, setBlue_bor5] = useState(true);
    var onBlue_bor5 = (c)=>{
      setBlue_bor5(Blue_bor5 = c)
    }

   return (
    <div>
      <div className="flex flex-row inset-x-0 ml-[84px] mt-[18px]">
        <button onClick={()=>{onBlue_bor1(false); onBlue_bor3(true); onBlue_bor5(true)}} className={Blue_bor1 ? "bg-[#f3f3f3] text-[#666666] text-sm font-bold w-32 p-4 h-12 border-r-4 a" : "bg-[#f3f3f3] text-black text-sm font-bold w-32 p-4 h-12 border-[#0170b9] border-r-4 a"}>Semester 1</button>
        <button onClick={()=>{onBlue_bor3(false); onBlue_bor1(true); onBlue_bor5(true)}} className={Blue_bor3 ? "bg-[#f3f3f3] text-[#666666] text-sm font-bold w-32 p-4 h-12 border-r-4 b" : "bg-[#f3f3f3] text-black text-sm font-bold w-32 p-4 h-12 border-[#0170b9] border-r-4 b"}>Semester 3</button>
        <button onClick={()=>{onBlue_bor5(false); onBlue_bor1(true); onBlue_bor3(true)}} className={Blue_bor5 ? "bg-[#f3f3f3] text-[#666666] text-sm font-bold w-32 p-4 h-12 border-r-4 c" : "bg-[#f3f3f3] text-black text-sm font-bold w-32 p-4 h-12 border-[#0170b9] border-r-4 c"}>Semester 5</button>
      </div>
      <Bcom_sec />
    </div>
   )
 }
 
export default Bcom