import React from 'react'
import { Link } from 'react-router-dom'

const Collection = () => {
  return (
    <section className='collection separacion bordesDentro'>
      <div className='collection__grid'>
        <div className='collection__content'>
          <div className='collection__image'>
            <img src='https://images.pexels.com/photos/14313066/pexels-photo-14313066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Chica con sudadera y lentes' />
          </div>
          <div className='collection__description'>
            <h3>Sudadera Nombre</h3>
            <p>$ Precio</p>
          </div>
        </div>
        {/* fin gallery */}
        <div className='collection__content'>
          <div className='collection__image'>
            <img src='https://images.pexels.com/photos/14313066/pexels-photo-14313066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Chica con sudadera y lentes' />
          </div>
          <div className='collection__description'>
            <h3>Sudadera Nombre</h3>
            <p>$ Precio</p>
          </div>
        </div>
        {/* fin gallery */}
        <div className='collection__content'>
          <div className='collection__image'>
            <img src='https://images.pexels.com/photos/14313066/pexels-photo-14313066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Chica con sudadera y lentes' />
          </div>
          <div className='collection__description'>
            <h3>Sudadera Nombre</h3>
            <p>$ Precio</p>
          </div>
        </div>
        {/* fin gallery */}
        <div className='collection__content'>
          <div className='collection__image'>
            <img src='https://images.pexels.com/photos/14313066/pexels-photo-14313066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Chica con sudadera y lentes' />
          </div>
          <div className='collection__description'>
            <h3>Sudadera Nombre</h3>
            <p>$ Precio</p>
          </div>
        </div>
        {/* fin gallery */}
      </div>
      <div className='collection__botones'>
        <Link to='products/all' style={{ textDecoration: 'none' }}> <button className='boton__general'>Ver todo</button></Link>
      </div>

    </section>
  )
}

export default Collection
