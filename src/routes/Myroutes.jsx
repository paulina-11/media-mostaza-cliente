import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import ProductDetails from '../pages/ProductDetails'
import Faq from '../pages/Faq'
const MyRoutes = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/:_id' element={<ProductDetails />} />
      <Route path='/faq' element={<Faq />} />
    </Routes>
  )
}
export default MyRoutes
