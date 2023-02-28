import React from 'react'

const Search = () => {
  return (
    <div>
      <button type='button' data-bs-toggle='modal' data-bs-target='#staticBackdrop'>
        <i className='bi bi-search' />
      </button>
      <div className='modal fade' id='staticBackdrop' data-bs-backdrop='static' data-bs-keyboard='false' tabIndex='-1' aria-labelledby='staticBackdropLabel' aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='buscador'>
              <input placeholder='Buscar' className='inputBuscar' />
              <i className='bi bi-search lupa' />
              <i data-bs-dismiss='modal' className='bi bi-x-lg' />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
