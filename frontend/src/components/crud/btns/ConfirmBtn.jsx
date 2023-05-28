import React from 'react'

const ConfirmBtn = ({ children, callback }) => {
    return (
        <div className='confirm-appointment__container'>
            <button onClick={callback}>{children}</button>
        </div>
    )
}

export default ConfirmBtn