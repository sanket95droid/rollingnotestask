import React, {useState} from 'react'
import Yr from "./Yr"


const Bcom_sec = () => {

  const [nonhon, usenonhon] = useState(true);
  const onnonhon = ()=>{
    usenonhon(!nonhon);
  }

  const [hon_b, usehon_b] = useState(true);
  const onhon_b = ()=>{
    usehon_b(!hon_b);
  }

  const [nonhon_b, usenonhon_b] = useState(false);
  const onnonhon_b = ()=>{
    usenonhon_b(!nonhon_b);
  }

  return (
    <div className="flex flex-col mb-3">
        <div className="flex flex-row">
            <p onClick={()=>{onhon_b(); onnonhon_b(); onnonhon();}} className={hon_b ? "hover:cursor-pointer ml-[84px] mt-1 text-[12px] font-semibold text-black": "hover:cursor-pointer ml-[84px] mt-1 text-[12px] font-semibold text-[#c8c8c8]"}>Honours</p>
            <p onClick={()=>{onnonhon_b(); onhon_b(); onnonhon();}} className={nonhon_b ? "hover:cursor-pointer ml-[84px] mt-1 text-[12px] font-semibold text-black" : "hover:cursor-pointer ml-[84px] mt-1 text-[12px] font-semibold text-[#c8c8c8]"}>Non-Honours</p>
        </div>
        <div className="flex flex-col">
            <div className="bg-[#f3f3f3] p-4 h-12 mx-[84px] mt-1 text-black text-sm font-bold">Alternative English <Yr link="" y="2019"/></div>
            <div className="bg-[#f3f3f3] p-4 h-12 mx-[84px] mt-1 text-black text-sm font-bold">Business Law<Yr link="" y="2021"/><Yr link="" y="2019"/></div>
            <div className="bg-[#f3f3f3] p-4 h-12 mx-[84px] mt-1 text-black text-sm font-bold">Communicative English<Yr link="" y="2021"/><Yr link="" y="2019"/></div>
            <div className="bg-[#f3f3f3] p-4 h-12 mx-[84px] mt-1 text-black text-sm font-bold">Economics<Yr link="" y="2021"/><Yr link="" y="2019 "/></div>
            <div className="bg-[#f3f3f3] p-4 h-12 mx-[84px] mt-1 text-black text-sm font-bold">Human Resource Development<Yr link=""  y="2021"/><Yr link="www.youtube.com" y="2019"/></div>
        </div>
        <div className={nonhon ? "mt-[22px] absolute min-w-full flex-col hidden": "mt-[22px] min-w-full absolute flex-col"}>
            <div className="bg-[#f3f3f3] p-4 h-12 mx-[84px] mt-1 text-black text-sm font-bold">Business Organisation and Management<Yr link="" y="2021"/><Yr link="" y="2019"/></div>
            <div className="bg-[#f3f3f3] p-4 h-12 mx-[84px] mt-1 text-black text-sm font-bold">Financial Accounting<Yr link="" y="2021-Discipline Specific"/><Yr link="" y="2021-Core"/><Yr link="www.google.com" y="2019"/></div>
            <div className="bg-[#f3f3f3] p-4 h-12 mx-[84px] mt-1 text-black text-sm font-bold">Multi-Disciplinary Course<Yr link="" y="2021"/></div>
            <div className="bg-[#f3f3f3] p-4 h-12 mx-[84px] mt-1 text-black text-sm font-bold">English Communication<Yr link="" y="2021"/></div>
            <div className="bg-[#f3f3f3] p-4 h-12 mx-[84px] mt-1 text-black text-sm font-bold">Assamese<Yr link="" y="2021"/></div>
        </div>
    </div>
  )
}

export default Bcom_sec