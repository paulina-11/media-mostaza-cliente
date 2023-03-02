import { createContext, useContext, useEffect, useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { GET_PRODUCTS } from '../graphql/Queries'

const ProductContext = createContext()

function ProductProvider (props) {
//   const [productSearch, setProductSearch] = useState('')
  const [totalProducts, setTotalProducts] = useState('')
  const [getProducts, { loading, error, data }] = useLazyQuery(GET_PRODUCTS, {
    variables: { name: totalProducts }
  })

  if (error) return <h3>Not Found</h3>
  if (data) {
    console.log(data)
  }

  useEffect(() => {
    setTimeout(() => {
      getProducts()
    }, 2000)
  }, [])

  const value = {
    totalProducts,
    setTotalProducts,
    getProducts,
    loading,
    error,
    data
  }
  return (
    <ProductContext.Provider
      value={value} {...props}
    />
  )
}

const useProductContext = () => {
  const context = useContext(ProductContext)
  return context
}

export {
  ProductProvider,
  useProductContext
}
