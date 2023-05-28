import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/shared/Nav'
import Dashboard from './components/Dashboard'
import Appointment from './components/Appointment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/appointment' element={<Appointment />}/>
      </Routes>
    </div>
  )
}

export default App
