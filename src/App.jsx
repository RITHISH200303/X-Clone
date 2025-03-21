import React from 'react'
import NavBar from './components/NavBar'
import './App.css'

function App() {

  return (
    <div className="w-screen">
      <div className='w-screen m-0 pt-0 pb-0 flex flex-row h-screen justify-center'>
        <header className='flex justify-end'>
          <NavBar/>
        </header>
        <main className="w-3/5">

        </main>
      </div>
    </div>
  )
}

export default App
