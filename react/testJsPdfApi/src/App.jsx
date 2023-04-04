import { useState, useRef } from 'react'
import './App.css'
import TemplateDocument from "./services/TemplateDocument"


function App() {
  const templatePDF = useRef();

  function handleUpdateRef () {
    templatePDF.current.generatePdf();
  }

  return (
    <div className="App min-h-screen flex justify-center content-center flex-wrap bg-gray-800 text-white">
      <div className='w-full flex justify-center m-10'>
        <TemplateDocument ref={templatePDF}/>
      </div>
       <button className='bg-green-300 p-4 rounded rounded-xl text-gray-700 font-bold hover:text-yellow-200 hover:bg-gray-600' onClick={handleUpdateRef}>Generate PDF</button>
    </div>
  )
}

export default App
