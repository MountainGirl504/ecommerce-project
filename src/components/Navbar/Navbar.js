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
                        <div className='name' ><Link to='/' style={{ textDecoration: 'none', color: 'lavenderblush' }}>buy stuff store</Link></div> 

                        <div className='search-div'>
                            <div ><input className='input-box' type='text'  placeholder='Search designers, products and more...'
                                onChange={this.handleChange}/></div>
                            <div className='find-box'><Link to={`/search/${this.state.userInput}`} onClick={this.props.find} style={{  color: 'lavenderblush' }}> FIND
                            </Link></div> 
                        </div>   

                    
                        <div className='nav-login' ><a href={process.env.REACT_APP_LOGIN} style={{ color: 'lavenderblush' }}> Sign In/Register</a></div>


                        <div className='shop-div'>
                            <div className='bag-img'><img src={bag2} alt="" className='bag' /></div>
                            <div className='num-item'>({this.props.items})</div>
                            <div className='num-total'>${this.props.total}</div>
                        </div>
                      
                    </div>

                    <div className='navbar'>
                        <Link to='/' style={{ textDecoration: 'none', color: 'lavenderblush' }}><div className='shop-div'>Home</div></Link>
                        <Link to='/product/category/woman' style={{ textDecoration: 'none', color: 'lavenderblush' }}><div className='women-div' style={{ textDecoration: 'none' }}>Women</div></Link>
                        <Link to='/product/category/men' style={{ textDecoration: 'none', color: 'lavenderblush' }}><div className='men-div'>Men</div></Link>
                        <Link to='/product/category/boys' style={{ textDecoration: 'none', color: 'lavenderblush' }}><div className='boys-div' style={{ textDecoration: 'none' }}>Boys</div></Link>
                        <Link to='/product/category/girls' style={{ textDecoration: 'none', color: 'lavenderblush' }}><div className='girls-div' style={{ textDecoration: 'none', color: 'lavenderblush' }}>Girls</div></Link>
                        <Link to='/cart' style={{ textDecoration: 'none', color: 'lavenderblush' }}><div className='cart-div' >Cart</div></Link>
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