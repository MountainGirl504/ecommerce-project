import React, { Component } from 'react'
import Header from './../Header/Header'
import Login from './../Login/Login'
//import ProductDetail from './../Product/ProductDetails'
import {connect} from 'react-redux'
import {getAllProducts} from './../../ducks/reducer'
import {Link} from 'react-router-dom'


class Home extends Component {

    componentDidMount(){
        //let {id} = this.props.product;
        this.props.getAllProducts();
    }

  render() {
    const products = this.props.product.map( (item, i) => {
        //console.log( this.props)
        //console.log(this.props.product[i]) 
        //console.log(item.name)                     
        return (
            <div key={item.id}>
                <p>{item.name}</p>
                <Link to={`/productDetails/${item.id}`}>
                    <p> {item.product_image} </p>
                </Link>
                <p>{item.description}</p>
                <p>${item.price}</p>
            </div>
        )
    })
    return (
      <div>
        <Header/>
        <Login/>
        <h1>This is a Home page</h1>
        <p>Product: </p>
        {products}
      </div>
    )
  }
}
function mapStateToProps(state){
    return {
        product: state.product
    }
}
export default connect (mapStateToProps, {getAllProducts})(Home)


//this.props.product[i].id === item.id