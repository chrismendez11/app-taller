import React from 'react'
import ConfirmBtn from '../btns/ConfirmBtn'

const Receipt = ({ title, btnText, handleOrder, order }) => {

  const date = new Date(order.date)

  return (
    <div className='make-appointment__container'>
      <div className='data-request-title__container'>
        <span>{title}</span>
      </div>
      <div className='service-info__container'>
        <div className='service-info'>
          <h3><i className="fa-solid fa-car"></i> Número de placa:</h3>
          <span>{order.carPlate.plateType.letter} {order.carPlate.plateNumber}</span>
        </div>
        <div className='service-info'> 
          <h3><i className="fa-solid fa-calendar-days"></i> Fecha de servicio:</h3>
          <span>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</span>
        </div>
        <div className='service-info'>
          <h3><i className="fa-solid fa-screwdriver-wrench"></i> Taller:</h3>
          <span>{order.garage.name}</span>
        </div>
        <div className='service-info'>
          <h3><i className="fa-solid fa-book-open"></i> Descripción:</h3>
          <span>{order.description}</span>
        </div>
        <div className='service-info'>
          <h3><i className="fa-solid fa-business-time"></i> Estatus:</h3>
          <span>{order.status}</span>
        </div>
      </div>
      <ConfirmBtn callback={handleOrder}>{btnText}</ConfirmBtn>
    </div>
  )
}

export default Receipt