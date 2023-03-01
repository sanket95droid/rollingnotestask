import React from 'react';
import Navbar from './components/Navbar';
import Changer from './components/Changer';
import PDF from './components/PDF';
import Social from './components/Social'
import Footer from "./components/Footer"

import "./index.css"

const App = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Changer />
        <div className="h-[2700px]">
          <PDF />
          <div className="shadow-lg z-10 w-fit absolute top-[435px]">
            <button className="absolute rounded-sm right-[-1240px] py-4 px-10 transition duration-300 font-extrabold text-[#1da1f2]/70 bg-white hover:text-white hover:bg-[#1da1f2]">Download</button>
          </div>
        </div>
      <Social />
      <Footer />
    </div>
  )
}

export default App