import { React, useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { GET_PRODUCTS } from '../../graphql/Queries'
import Feature from '../../components/Feature'
import Collection from '../../components/Collection'
import HeroCenter from '../../components/HeroCenter'
import Details from '../../components/Details'
import ImageBar from '../../components/ImageBar'

const Home = () => {
  const [totalProducts, setTotalProducts] = useState('')
  const [getProducts, { loading, error, data }] = useLazyQuery(GET_PRODUCTS, {
    variables: { name: totalProducts }
  })
  if (error) return <h1>Not Found</h1>

  if (data) {
    console.log(data)
  }
  return (
    <div>
      <div>
        <div className='hero' />
      </div>
      <div>
        <Feature />
      </div>
      <div className='bordes'>
        <Collection />
      </div>
      <div>
        <HeroCenter />
      </div>
      <div className='bordes'>
        <Details />
      </div>
      <div>
        <ImageBar />
      </div>
      <button
        onClick={() => getProducts()}
      > click
      </button>
    </div>
  )
}

export default Home
