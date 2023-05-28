import React from 'react'
import ConfirmBtn from '../btns/ConfirmBtn'
import useFetch from '../../../hooks/useFetch'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import {useSelector} from 'react-redux'

const DataForm = ({ setDisplay, btnText, order, carPlate, setOrder }) => {

  // FETCH GARAGES LIST
  const { loading, data, error } = useFetch('https://app-taller-production-9f66.up.railway.app/api/v1/garage/')

  const { register, handleSubmit, reset } = useForm()
  const request = useSelector((state) => state.request)

  const submit = (info) => {
    if (request === 'program') {
      handleCreateOrder(info)
    } else if(request === 'reprogram') {
      handleUpdate(info)
    }
  }

  const handleCreateOrder = (info) => {
    const body = {
      "date": info.date,
      "description": info.description,
      "carPlateId": carPlate.id,
      "garageId": data.findIndex(item => item.name === info.garage) + 1
    }

    if (info.date && info.garage && info.description) {
      axios.post(`https://app-taller-production-9f66.up.railway.app/api/v1/order/`, body)
        .then(res => {
          setOrder(res.data)
          setDisplay('receipt')
        })
        .catch(err => console.log(err))
    }
  }

  const handleUpdate = (info) => {

    const body = {
      "date": info.date,
      "description": info.description,
      "carPlateId": order.carPlateId,
      "garageId": data.findIndex(item => item.name === info.garage) + 1
    }

    if (info.date || info.garage || info.description) {
      axios.patch(`https://app-taller-production-9f66.up.railway.app/api/v1/order/${order.id}`, body)
        .then(res => {
          setOrder(res.data.order)
          setDisplay('receipt')
        })
        .catch(err => console.log(err))
    }

  }

  return (
    <form onSubmit={handleSubmit(submit)} className='make-appointment__container'>
      <div className='data-request-title__container'>
        <span>Ingresa la fecha, taller y una descripción sobre el mantenimiento de tu vehiculo</span>
      </div>
      <div className='plate-input__container'>
        <div className='plate-input'>
          <span>Fecha</span>
          <input {...register('date')} type="date" />
        </div>
        <div className='plate-input'>
          <span>Talleres disponibles</span>
          <select {...register('garage')} name="garage" id="garage">
            {data?.map(garage => (
              <option key={garage.id} value={garage.name}>{garage.name}</option>
            ))}
          </select>
        </div>
        <div className='plate-input'>
          <span>Descripción</span>
          <input {...register('description')} type="text" />
        </div>
      </div>
      <ConfirmBtn>{btnText}</ConfirmBtn>
    </form>
  )
}

export default DataForm