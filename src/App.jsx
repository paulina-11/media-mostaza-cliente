import MyRoutes from './routes/Myroutes'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Header from './components/Header'
import Footer from './components/Footer'
import { ProductProvider } from './context/ProductsContext'

function App () {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:3100'
  })
  return (
    <ApolloProvider client={client}>
      <Router>
        <ProductProvider>
          <Header />
          <MyRoutes />
          <Footer />
        </ProductProvider>
      </Router>
    </ApolloProvider>

  )
}

export default App
