// import React, { useState } from 'react'
// import { useLazyQuery } from '@apollo/client'
// import { GET_PRODUCT_BY_ID } from '../../graphql/Queries'

const Search = () => {
  // const [productSearch, setProductSearch] = useState('')
  // const [getProductByID, { loading, error, data }] = useLazyQuery(GET_PRODUCT_BY_ID, {
  //   variables: { name: productSearch }
  // })
  // if (error) return <h1>Not Found</h1>

  // if (data) {
  //   console.log('------')
  //   console.log(data)
  // }
  return (
    <div>
      <div>
        <button type='button' data-bs-toggle='modal' data-bs-target='#staticBackdrop'>
          <i className='bi bi-search' />
        </button>
        <div className='modal fade' id='staticBackdrop' data-bs-backdrop='static' data-bs-keyboard='false' tabIndex='-1' aria-labelledby='staticBackdropLabel' aria-hidden='true'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='buscador'>
                <input
                  type='text'
                  placeholder='Buscar'
                  className='inputBuscar'
                  // onChange={(e) => {
                  //   setProductSearch(e.target.value)
                  // }}
                />
                <button>
                  <i className='bi bi-search lupa' />
                </button>
                <i data-bs-dismiss='modal' className='bi bi-x-lg' />
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* {data && (
        <p>{data.getProductByID.product}</p>
      )} */}
    </div>
  )
}

export default Search
