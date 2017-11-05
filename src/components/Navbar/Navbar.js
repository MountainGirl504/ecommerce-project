import React, { Component } from 'react'
import bag2 from '../../Assets/bag-icon2.png'
import { Link } from 'react-router-dom'
//import Search from './../Seach/Search'
import { connect } from 'react-redux'
import { calculateTotal, cartItems } from './../../ducks/reducer'
import './Navbar.css'



class Navbar extends Component {
    constructor(){
        super()
        this.state={
            userInput: ''
        }
        this.handleChange=this.handleChange.bind(this);
    }


    handleChange(e){
        this.setState({
            userInput: e.target.value
        })
    }


    render() {
        return (
            <div>
                <div className='main-header'>
                    <div className='persistent-nav'>
                        <div className='name'>buy stuff store</div> 

                        <div className='search-div'>
                            <div ><input className='input-box' type='text'  placeholder='Search designers, products and more...'
                                onChange={this.handleChange}/></div>
                            <div className='find-box'><Link to={`/search/${this.state.userInput}`} onClick={this.props.find}> FIND
                            </Link></div> 
                        </div>   

                    
                        <div className='nav-login'><a href={process.env.REACT_APP_LOGIN}> sign In | register</a></div>


                        <div className='shop-div'>
                            <div className='bag-img'><img src={bag2} alt="" className='bag' /></div>
                            <div className='num-item'>({this.props.items})</div>
                            <div className='num-total'>${this.props.total}</div>
                        </div>
                      
                    </div>

                    <div className='navbar'>
                        <Link to='/'><div className='shop-div'>Home</div></Link>
                        <Link to='/product/category/woman'><div className='women-div'>Women</div></Link>
                        <Link to='/product/category/men'><div className='men-div'>Men</div></Link>
                        <Link to='/product/category/boys'><div className='boys-div'>Boys</div></Link>
                        <Link to='/product/category/girls'><div className='girls-div'>Girls</div></Link>
                        <Link to='/cart'><div className='cart-div'>Cart</div></Link>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        total: state.total,
        items: state.items
    }
}
export default connect(mapStateToProps, { calculateTotal, cartItems })(Navbar)