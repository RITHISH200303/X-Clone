import React from 'react'
import NavBar from './components/NavBar'
import MainBody from './components/MainBody'
import './App.css'

function App() {

  return (
    <div className="w-screen">
      <div className='w-full m-0 pt-0 pb-0 flex flex-row h-screen justify-center'>
        <header className='flex justify-end'>
          <NavBar/>
        </header>
        <main className="w-3/5">
          <MainBody></MainBody>
        </main>
      </div>
    </div>
  )
}

export default App
