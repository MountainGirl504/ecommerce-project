import React, { Component } from 'react';
import './App.css';
import Login from './components/Login/Login'
import { Route} from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Cart from './components/Cart/Cart'
import ProductDetails from './components/Product/ProductDetails'

class App extends Component {
  render() {
    return (
      
        <div className="App">
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/productDetails/:id' component={ProductDetails}/>
        </div>
      
    );
  }
}

export default App;
