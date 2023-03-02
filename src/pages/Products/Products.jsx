import React from 'react'
import { useProductContext } from '../../context/ProductsContext'

const Products = () => {
  const context = useProductContext()

  return (
    <section className='collection separacion bordesDentro bordes products'>
      <div className='collection__grid separacion '>
        {context.data.getProducts.map((product) => (
          <div key={product._id} className='collection__content hvr-grow'>
            <div className='collection__image products__image'>
              <img src={product.image} />
            </div>
            <div className='products__description'>
              <p>{product.product}</p>
              <p className='products__description-price'> $ {product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <a href='#' class='hvr-grow'>Grow</a>
    </section>
  )
}

export default Products
