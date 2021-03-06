import logo from './logo.svg';
import Navbar from "./components/Navbar"
import Category from './components/Category'
import Cart from './components/Cart'
import PDP from './components/PDP'
import bootstrap from 'bootstrap' 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
} from '@apollo/client'
import {onError} from '@apollo/client/link/error'

// const link = from({
//   errorLink,
//   new HttpLink(uri: {/* Paste link here */})
// })

// const client = ApolloClient({
//   cache: new InMemoryCache()
//   link: link
// })

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Navbar />
      </div>
      <main className='container'>
        <Category />
      </main>
    </div>
  );
}

export default App;
