import Random from "./components/Random";
import Tag from "./components/Tag";

import React from 'react'

const App = () => {
  return (
    <div className="w-full h-screen flex flex-col background  overflow-x-hidden items-center">
        <h1 className=" bg-white  rounded-lg w-11/12 text-center mt-[40px]
          px-10 py-2 text-4xl font-bold ">RANDOM GIF</h1>
        <div className="w-full flex flex-col items-center">
          <Random/>
          <Tag/>
        </div>
    </div>
  )
}

export default App