import React from 'react'
import './styles/box.css'

const Box = ({phrase, handleChange}) => {
  return (
    <section className='box'>
        <div className='box__container'>
          <p>{phrase}</p>
        </div>
    </section>
  )
}

export default Box