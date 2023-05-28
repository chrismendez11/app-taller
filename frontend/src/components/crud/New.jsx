import React, { useState } from 'react'
import NewForm from './forms/NewForm'
import DataForm from './forms/DataForm'
import Receipt from './info/Receipt'
import { useNavigate } from 'react-router-dom'

const New = () => {

  const [display, setDisplay] = useState('car')
  const [carPlate, setCarPlate] = useState()
  const [order, setOrder] = useState()

  const navigate = useNavigate()
  const handleMenu = () => {
    navigate('/')
  }

  return (
    <>
    {display === 'car' ? <NewForm setDisplay={setDisplay} setCarPlate={setCarPlate} /> : ''}
    {display === 'data' ? <DataForm setDisplay={setDisplay} btnText={"Programar Cita"} carPlate={carPlate} setOrder={setOrder}/> : ''}
    {display === 'receipt' ? <Receipt title={"Cita progamada con exito!"} btnText={"Menú"} handleOrder={handleMenu} order={order} /> : ''}
    </>
  )
}

export default New