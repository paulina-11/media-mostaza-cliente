import React, { useState, useEffect } from 'react'
// import { useProductContext } from '../../context/ProductsContext'
import { useParams } from 'react-router-dom'
import { useLazyQuery } from '@apollo/client'
import { GET_PRODUCT_BY_ID } from '../../graphql/Queries'

const ProductDetails = () => {
  const { _id } = useParams()
  const [productId, setProductId] = useState('')
  const [getProducBytId, { loading, error, data }] = useLazyQuery(GET_PRODUCT_BY_ID, {
    variables: { name: productId }
  })

  useEffect(() => {
    getProducBytId(_id)
  }, [])

  if (loading) return <p>Cargando...</p>
  if (error) {
    console.log(error)
    return <p>Error</p>
  }
  if (data) {
    console.log(data)
  }

  return (
    <div>
      <div>
        {/* <img src={context._id.image} alt='' /> */}
      </div>
    </div>
  )
}

export default ProductDetails
