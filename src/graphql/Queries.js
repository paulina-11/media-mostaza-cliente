import { gql } from '@apollo/client'

export const GET_PRODUCTS = gql`
  query getProducts {
    getProducts {
      _id
      product
      category
      price
      brand
      description
      image
    }
  }
`
