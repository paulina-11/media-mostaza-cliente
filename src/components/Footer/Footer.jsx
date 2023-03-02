import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import masterCard from '../../assets/image/mastercard.svg'
import amex from '../../assets/image/amex.svg'
import paypal from '../../assets/image/paypal.svg'
import visa from '../../assets/image/visa.svg'

const Footer = () => {
  const [getEmail, setgetEmail] = useState(false)

  const handleClick = () => {
    setgetEmail(true)
  }
  return (
    <section className='footer'>
      <div className='footer__up'>
        <div>
          <p>Suscríbete a nuestro newsletters</p>
          {getEmail ? <p className='suscrito'>¡Gracias por suscribirte!</p> : null}
        </div>
        <div className='footer__up-input'>
          <input type='text' placeholder='Direccion de correo electrónico' />
          <button className='boton__general' onClick={handleClick}> Suscribirse</button>
        </div>
      </div>
      <hr className='footer__line' />
      <div className='footer__iconos'>
        <ul className='footer__iconos-pagos'>
          <li>
            <img src={amex} alt='' />
          </li>
          <li>
            <img src={masterCard} alt='' />
          </li>
          <li>
            <img src={paypal} alt='' />
          </li>
          <li>
            <img src={visa} alt='' />
          </li>
        </ul>
        <div className='footer__iconos-pagos pagos'>
          <i className='bi bi-facebook redes' />
          <i className='bi bi-instagram redes' />
        </div>
      </div>
      <div className='footer__derechos'>
        <p>© 2023, </p>  <Link to='/' style={{ textDecoration: 'none' }}> <span> Media Mostaza</span> </Link>
      </div>
    </section>
  )
}

export default Footer
