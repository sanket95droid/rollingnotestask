import React from 'react';
import Navbar from './components/Navbar';
import Changer from './components/Changer';
import Main from "./components/Main"
import Bcom from './components/Bcom';
import Footer from "./components/Footer"

import "./index.css"

const App = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Changer />
      <Main />
      <Bcom />
      <Footer />
    </div>
  )
}

export default App