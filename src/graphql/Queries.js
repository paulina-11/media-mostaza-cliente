import { gql } from '@apollo/client'

export const GET_PRODUCTS = gql`
  query getProducts {
    getProducts {
      _id
      title
      price
      brand
      description
      image
    }
  }
`
