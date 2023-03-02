import React from 'react'

const Faq = () => {
  return (
    <div className='bordes separacion faq'>
      <div className='faq__titulos'>
        <h2>FAQ</h2>
        <p>Preguntas Generales</p>
      </div>
      <div className='faq__list'>
        <ul>
          <li>¿De dónde son?</li>
          <p>Somos originarios de Monterrey, México pero hacemos pedidos a toda la república.</p>
          <li> ¿Cuánto se tarda el envío?</li>

          <p>Hacemos envíos a toda la república mexicana en $98 pesos. Una vez hecho tu pedido, entra a producción y tarda de 1 a 3 días hábiles, dependiendo del día que se hizo el pedido. Después creamos la guía y mandamos a tu dirección de envío, usualmente eso tarda de 3 a 7 días hábiles. En total tu pedido puede tardar hasta 10 días hábiles en llegar, aunque usualmente llega a ser menos tiempo.</p>
          <li> ¿Puedo hacer pedidos personalizados?</li>
          <p>Si hacemos gorras con diseños personalizados, puedes comprar la gorra aquí, escoges el color que gustes y nos mandas tu diseño/frase junto con tu número de pedido por inbox a nuestra página de Facebook o Instagram para darle seguimiento. También puedes enviarlo a info@nueveochobrand.com.</p>
          <li>¿Hay devoluciones?</li>
          <p>
            Puedes regresar tu pedido sin razón alguna. Tienes la opción de regresarlo en los primeros 7 días después de tu compra. La guía de regreso corre por parte del cliente. Importante: el pedido debe estar sin usarse.
          </p>
          <li>¿Hay reembolso?</li>
          <p> Una vez tu pedido haya sido devuelto, se te notificará la resolución (si fue aceptado o rechazado). Si fue aceptado, puede tomar hasta 14 días hábiles para que el reembolso se vea reflejado en tu cuenta de banco.</p>
          <li>¿Qué onda con los métodos de pago?</li>
          <p> Aceptamos PayPal, Visa, MasterCard y American Express. Contamos con altos estándares de seguridad a través de nuestro proveedor Shopify.</p>
          <li>¿Cómo puedo facturar?</li>
          <p>Envíanos un correo a info@nueveochobrand.com con todos tus datos para proceder con la factura. Es importante que nos envíes esto el mismo mes de tu compra. </p>
        </ul>
      </div>
    </div>
  )
}

export default Faq
