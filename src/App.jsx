import MyRoutes from './routes/Myroutes'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Header from './components/Header'
import Footer from './components/Footer'

function App () {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:3100'
  })
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <MyRoutes />
        <Footer />
      </Router>
    </ApolloProvider>

  )
}

export default App
