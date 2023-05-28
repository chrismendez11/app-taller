import React, { useState } from 'react'
import RemakeForm from './forms/RemakeForm'
import DataForm from './forms/DataForm'
import Receipt from './info/Receipt'
import { useNavigate } from 'react-router-dom'

const Remake = () => {

  const [display, setDisplay] = useState('car')
  const [order, setOrder] = useState()

  const handleDisplay = () => {
    setDisplay('data')
  }

  const navigate = useNavigate()
  const handleMenu = () => {
    navigate('/')
  }

  return (
    <>
    {display === 'car' ? <RemakeForm setDisplay={setDisplay} setOrder={setOrder} /> : ''}
    {display === 'info' ? <Receipt title={"Información acerca del mantenimiento de tu vehiculo"} btnText={"Actualizar"} handleOrder={handleDisplay} order={order} />: ''}
    {display === 'data' ? <DataForm setDisplay={setDisplay} btnText={"Reprogramar Cita"} order={order} setOrder={setOrder} /> : ''}
    {display === 'receipt' ? <Receipt title={"Cita reprograma con exito!"} btnText={"Menú"} handleOrder={handleMenu} order={order}  /> : ''}
    </>
  )
}

export default Remake