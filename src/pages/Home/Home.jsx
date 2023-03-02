import Spinner from '../../components/Spinner/Spinner'
import { useProductContext } from '../../context/ProductsContext'
import Dashboard from '../Dashboard/Dashboard'

const Home = () => {
  const context = useProductContext()
  return (
    <div>
      {
        context.loading
          ? (
            <div>
              <Spinner />
            </div>
            )
          : (
            <Dashboard />
            )
      }

    </div>
  )
}

export default Home
