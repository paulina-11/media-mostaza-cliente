import React from 'react'
import { Link } from 'react-router-dom'

const Feature = () => {
  return (
    <div className='feature separacion bordes'>
      <div className='feature__image'>
        <img src='https://images.pexels.com/photos/6958627/pexels-photo-6958627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='persona con sudadera y audifonos sonriendo' />
      </div>
      <div className='feature__description bordesDentro'>
        <h3>Las sudaderas no son solo sudaderas</h3>
        <p>
          ¿No sales de lo mismo? No te preocupes, te ayudamos a llevar tu clóset al siguiente nivel.
        </p>
        <p>¿Qué historia vas a querer contar hoy?</p>
        <Link to='products/all' style={{ textDecoration: 'none' }}> <button className='boton__general'>Comprar ahora</button></Link>
      </div>
    </div>
  )
}

export default Feature
