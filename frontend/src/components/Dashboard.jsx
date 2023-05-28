import React from 'react'
import '../styles/Dashboard.css'
import { useNavigate } from 'react-router-dom'
import video from '../assets/video_taller.mp4'

const Dashboard = () => {

  const navigate = useNavigate()

  const handleRoute = () => {
    navigate('/appointment')
  }

  return (
    <main className='dashboard__section'>
      <div className='dashboard__container'>
        <div className='dashboard-img__container'><video src={video} width="800" height="300" autoPlay muted loop /></div>
        <h2>Realiza la solicitud para el mantenimiento de tu vehiculo</h2>
        <button onClick={handleRoute}><i className="fa-solid fa-calendar"></i> Agendar cita</button>
      </div>
    </main>
  )
}

export default Dashboard