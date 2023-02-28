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
                <a className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                  The sweatshirts
                </a>
                <ul className='dropdown-menu'>
                  <li><Link className='dropdown-item' to='products/basicas'>Básicas </Link></li>
                  <li><Link className='dropdown-item' to='products/capucha'>Con capucha</Link></li>
                  <li><Link className='dropdown-item' to='products/cremallera'>Con cremallera</Link></li>
                  <li><Link className='dropdown-item' to='products/all'>Todos los productos</Link></li>
                </ul>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='faq'>FAQ</Link>
              </li>
            </ul>
          </nav>
          <div>
            <Search />
          </div>
          <div>
            <i className='bi bi-bag' />
          </div>
        </div>
      </header>

    </div>
  )
}

export default Header
