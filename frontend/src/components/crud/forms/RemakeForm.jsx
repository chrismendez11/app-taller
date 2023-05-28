import React, { useCallback } from 'react'
import useFetch from '../../../hooks/useFetch'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const RemakeForm = ({ setDisplay, setOrder }) => {

    // FETCH PLATE TYPES LIST
    const { loading, data, error } = useFetch('http://localhost:3000/api/v1/plateType/')

    const { register, handleSubmit, reset } = useForm()
    const handleOrderNumber = (info) => {
        info.plateType === '' ? info.plateType = "P" : ''

        // FETCH ORDER DATA  
        if (info.order) {
            axios.get(`http://localhost:3000/api/v1/order/${info.order}`)
            .then(res => {
                setOrder(res.data)
                setDisplay('info')
            })
            .catch(err => console.log(err))
        }
    }

    return (
        <div className='make-appointment__container'>
            <div className='data-request-title__container'>
                <span>Ingresa el tipo, número de placa y número de orden</span>
            </div>
            <form onSubmit={handleSubmit(handleOrderNumber)} className='plate-input__container'>
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
                    <input {...register('carPlate')} type="text" />
                </div>
                <div className='plate-input'>
                    <span>No. Orden</span>
                    <div className='plate-input-btn__container'>
                        <input {...register('order')} type="text" />
                        <button><i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RemakeForm

