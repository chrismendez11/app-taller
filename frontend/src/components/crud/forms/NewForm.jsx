import React from 'react'
import useFetch from '../../../hooks/useFetch'
import { set, useForm } from 'react-hook-form';
import axios from 'axios'

const NewForm = ({ setDisplay, setCarPlate }) => {

  // FETCH PLATE TYPES LIST
  const { loading, data, error } = useFetch('http://localhost:3000/api/v1/plateType/')

  const { register, handleSubmit, reset } = useForm()
  const handleCarPlate = (info) => {
    info.plateType === '' ? info.plateType = "P" : ''

    const body = {
      "plateNumber": info.carPlate,
      "plateTypeId": data.findIndex(item => item.letter === info.plateType) + 1
    }

    // POST NEW CAR PLATE   
    if (info.carPlate) {
        axios.post(`http://localhost:3000/api/v1/carPlate/`, body)
        .then(res => {
            setCarPlate(res.data)
            setDisplay('data')
        })
        .catch(err => console.log(err))
    }
}

  return (
    <div className='make-appointment__container'>
      <div className='data-request-title__container'>
        <span>Ingresa el tipo y número de placa</span>
      </div>
      <form onSubmit={handleSubmit(handleCarPlate)} className='plate-input__container'>
        <div className='plate-input'>
          <span>Tipo de placa</span>
          <select {...register('plateType')} name="plateType" id="plateType">
            {data?.map(plateType => (
              <option key={plateType.id} value={plateType.letter}>{plateType.letter}</option>
            ))}
          </select>
        </div>
        <div className='plate-input'>
          <span>Número de placa</span>
          <div className='plate-input-btn__container'>
            <input {...register('carPlate')} type="text" />
            <button><i className="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default NewForm