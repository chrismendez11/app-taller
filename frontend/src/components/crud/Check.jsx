import React, { useState } from 'react'
import StatusForm from './forms/StatusForm'
import Receipt from './info/Receipt'

const Check = () => {

  const [display, setDisplay] = useState('status')
  const [order, setOrder] = useState()

  const handleStatus = () => {
    setDisplay('status')
  }

  return (
    <>
      {display === 'status' ? <StatusForm btnText={"Ver estatus"} setDisplay={setDisplay} setOrder={setOrder} /> : ''}
      {display === 'receipt' ? <Receipt title={"Información acerca del mantenimiento de tu vehiculo"} btnText={"Buscar otro servicio"} handleOrder={handleStatus} order={order} /> : ''}
    </>
  )
}

export default Check