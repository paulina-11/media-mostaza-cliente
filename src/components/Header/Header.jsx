import React from 'react'
import Search from '../Search'
import { Link } from 'react-router-dom'

const Header = () => {
  window.addEventListener('scroll', function () {
    const header = document.querySelector('header')
    header.classList.toggle('abajo', window.scrollY > 0)
  })
  return (
    <div>
      <header className='navbar navbar-expand-lg bg-body-tertiary fixed-top'>
        <div className='container-fluid'>
          <Link className='navbar-brand logo' to='/'><span className='block'>Media</span> Mostaza</Link>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <nav className='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <Link className='nav-link active' aria-current='page' to='/'>Inicio</Link>
              </li>
              <li className='nav-item dropdown'>
                <Link to='products' className='nav-link ' href='#' role='button'>
                  The sweatshirts
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='faq'>FAQ</Link>
              </li>
              <div className='buscador__nav'>
                <li>
                  <Search />
                </li>
                <li>
                  <i className='bi bi-bag' />
                </li>
              </div>
            </ul>
          </nav>
        </div>
      </header>

    </div>
  )
}

export default Header
