import React, { useState } from 'react'
import StatusForm from './forms/StatusForm'
import Receipt from './info/Receipt'
import axios from 'axios'

const Cancel = () => {

  const [display, setDisplay] = useState('status')
  const [order, setOrder] = useState()

  const handleDeleteOrder = () => {
    axios.delete(`https://app-taller-production-9f66.up.railway.app/api/v1/order/${order.id}`)
      .then(res => {
        setDisplay('status')
        alert(`Order with id ${order.id} deleted successfully`)

      })
      .catch(err => console.log(err))
  }

  return (
    <>
      {display === 'status' ? <StatusForm btnText={"Buscar"} setDisplay={setDisplay} setOrder={setOrder} /> : ''}
      {display === 'receipt' ? <Receipt title={"Información acerca del mantenimiento de tu vehiculo"} btnText={"Cancelar"} handleOrder={handleDeleteOrder} order={order} /> : ''}
    </>
  )
}

export default Cancel