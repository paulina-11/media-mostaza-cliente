import React from 'react'
import { Link } from 'react-router-dom'

const Collection = () => {
  return (
    <section className='collection separacion bordesDentro'>
      <div className='collection__grid'>
        <div className='collection__content'>
          <div className='collection__image'>
            <img src='https://images.pexels.com/photos/7036552/pexels-photo-7036552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Chica con sudadera y lentes' />
          </div>
          <div className='collection__description'>
            <h3>Sudadera cuello corto</h3>
            <p>$ 450.00</p>
          </div>
        </div>
        {/* fin gallery */}
        <div className='collection__content'>
          <div className='collection__image'>
            <img src='https://images.pexels.com/photos/7036540/pexels-photo-7036540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Chica con sudadera y lentes' />
          </div>
          <div className='collection__description'>
            <h3>Sudadera Overcite</h3>
            <p>$ 600.50</p>
          </div>
        </div>
        {/* fin gallery */}
        <div className='collection__content'>
          <div className='collection__image'>
            <img src='https://images.pexels.com/photos/3760767/pexels-photo-3760767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Chica con sudadera y lentes' />
          </div>
          <div className='collection__description'>
            <h3>Sudadera Tipo Crew</h3>
            <p>$ 350.00</p>
          </div>
        </div>
        {/* fin gallery */}
        <div className='collection__content'>
          <div className='collection__image'>
            <img src='https://images.pexels.com/photos/6311670/pexels-photo-6311670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Chica con sudadera y lentes' />
          </div>
          <div className='collection__description'>
            <h3>Sudadera</h3>
            <p>$ 350.00</p>
          </div>
        </div>
        {/* fin gallery */}
      </div>
      <div className='collection__botones'>
        <Link to='products' style={{ textDecoration: 'none' }}> <button className='boton__general'>Ver todo</button></Link>
      </div>

    </section>
  )
}

export default Collection
