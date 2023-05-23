import React from 'react'
import './styles/button.css'

const Button = ({handleChange}) => {
  return (
    <div>
        <button onClick={handleChange} className='box__btn'><i className='bx bx-rotate-right'></i></button>
    </div>
  )
}

export default Button