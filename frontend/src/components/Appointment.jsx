import React, { useState } from 'react'
import axios from 'axios'
import '../styles/Appointment.css'
import { useDispatch, useSelector } from 'react-redux'
import { setRequest } from '../store/slices/request.slice'
import New from './crud/New'
import Remake from './crud/Remake'
import Check from './crud/Check'
import Cancel from './crud/Cancel'


const Appointment = () => {

  const request = useSelector((state) => state.request)

  const dispatch = useDispatch()

  const [btnSelected, setBtnSelected] = useState('')

  return (
    <main className='dashboard__section'>
      <div className='dashboard__container'>
        <div className='dashboard-img__container'><img src="https://autoland.com.co/wp-content/uploads/2022/09/Articulo-2.jpg" alt="" /></div>
        <h2>Selecciona la opción para tu solicitud</h2>
        <div className='cita-btns__container'>
          <button onClick={() => {dispatch(setRequest('program')); setBtnSelected('btn-1')}} id='btn-1' className={btnSelected === 'btn-1' ?  "cita-btn-selected" : 'cita-btn'}><i className="fa-solid fa-calendar"></i> Programar Cita</button>
          <button onClick={() => {dispatch(setRequest('reprogram')); setBtnSelected('btn-2')}} id='btn-2' className={btnSelected === 'btn-2' ? "cita-btn-selected" : 'cita-btn'}><i className="fa-regular fa-calendar-days"></i> Reprogramar Cita</button>
          <button onClick={() => {dispatch(setRequest('status')); setBtnSelected('btn-3')}} id='btn-3' className={btnSelected === 'btn-3' ? "cita-btn-selected" : 'cita-btn'}><i className="fa-solid fa-calendar-week"></i> Ver estatus de servicio</button>
          <button onClick={() => {dispatch(setRequest('cancel')); setBtnSelected('btn-4')}} id='btn-4' className={btnSelected === 'btn-4' ? "cita-btn-selected" : 'cita-btn'}><i className="fa-solid fa-calendar-xmark"></i> Cancelar servicio</button>
        </div>
        {request === 'program' ? <New /> : ''}
        {request === 'reprogram' ? <Remake /> : ''}
        {request === 'status' ? <Check /> : ''}
        {request === 'cancel' ? <Cancel /> : ''}
      </div>
    </main>
  )
}

export default Appointment