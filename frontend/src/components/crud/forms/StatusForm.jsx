import React from 'react'
import '../../../styles/StatusForm.css'
import '../../../styles/New.css'
import useFetch from '../../../hooks/useFetch'
import ConfirmBtn from '../btns/ConfirmBtn'
import { useForm } from 'react-hook-form';
import axios from 'axios'

const StatusForm = ({ btnText, setDisplay, setOrder }) => {

    // FETCH PLATE TYPES LIST
    const { loading, data, error } = useFetch('http://localhost:3000/api/v1/plateType/')

    const { register, handleSubmit, reset } = useForm()
    const handleStatus = (data) => {
        // FETCH ORDER DATA 
        if (data.order) {
            axios.get(`http://localhost:3000/api/v1/order/${data.order}`)
            .then(res => {
                setOrder(res.data)
                setDisplay('receipt')
            })
            .catch(err => console.log(err))
        }
    }

    return (
        <form onSubmit={handleSubmit(handleStatus)} className='make-appointment__container'>
            <div className='data-request-title__container'>
                <span>Ingresa el tipo, número de placa y número de orden</span>
            </div>
            <div className='plate-input__container'>
                <div className='plate-input'>
                    <span>Tipo de placa</span>
                    <select  {...register('plateType')} name="plateType" id="plateType">
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
                    <input {...register('order')} type='number' />
                </div>
            </div>
            <ConfirmBtn>{btnText}</ConfirmBtn>
        </form>
    )
}

export default StatusForm