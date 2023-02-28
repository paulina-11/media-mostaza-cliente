import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../components/Products'
import ProductDetails from '../pages/ProductDetails'
import Faq from '../pages/Faq'

const MyRoutes = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/products' element={<Products />} />
      <Route exact path='/:productId' element={<ProductDetails />} />
      <Route exact path='/faq' element={<Faq />} />

    </Routes>
  )
}
export default MyRoutes
