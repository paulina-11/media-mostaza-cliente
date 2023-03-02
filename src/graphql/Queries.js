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
export const GET_PRODUCT_BY_ID = gql`
  query getProductById($_id: ID) {
    getProductById(_id: $_id) {
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
export const GET_PRODUCT_BY_NAME = gql`
  query getProductByName($product: String!) {
    getProductByName(product: $product) {
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
