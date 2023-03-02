import React from 'react'
import { useProductContext } from '../../context/ProductsContext'
import { Link } from 'react-router-dom'

const Products = () => {
  const context = useProductContext()

  return (
    <section className='collection separacion bordesDentro bordes products'>
      <div className='collection__grid separacion '>
        {context.data.getProducts.map((product) => (
          <Link key={product._id} to={`/products/${product._id}`}>
            <div className='collection__content hvr-grow'>
              <div className='collection__image products__image'>
                <img src={product.image} />
              </div>
              <div className='products__description'>
                <p>{product.product}</p>
                <p className='products__description-price'> $ {product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Products
