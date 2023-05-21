import React from 'react'
import './styles/box.css'

const Box = ({phrase, handleChange}) => {
  return (
    <section className='box'>
        <div className='box__container'>
          <p>{phrase}</p>
        </div>

        <button onClick={handleChange} className='box__btn'><i className='bx bx-rotate-right'></i></button>
      </section>
  )
}

export default Box