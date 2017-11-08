import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import ProductDetails from './components/Product/ProductDetails'
import Search from './components/Seach/Search'
import Navbar from './components/Navbar/Navbar'
import Category from './components/Home/Category'
import Holiday from './components/Landing/Holiday'
import FallStyle from './components/Landing/FallStyle'

class App extends Component {
  render() {
    return (
      
        <div className="App">
        
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Navbar}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/productDetails/:id' component={ProductDetails}/>
          <Route path='/search/:searchItem' component={Search}/>
          <Route path='/product/category/:category' component={Category}/>
          <Route path='/holiday' component={Holiday}/>
          <Route path='/fallstyle' component={FallStyle}/>
        </div>
      
    );
  }
}

export default App;
