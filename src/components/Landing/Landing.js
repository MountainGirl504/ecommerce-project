import React, { Component } from 'react'
import './Landing.css'
import {Link } from 'react-router-dom'



export default class Landing extends Component {

    render() {
        return (
            <div className='landing-page'>
                
                <div className='landing-pic-div'>

                <div className='text-box-div'>
                        <p className='code-text animated bounceInRight'> 30% OFF full-price styles.
                            Online & In stores.
                            Use code GETSHOPPING.
                        </p>
                    </div>
                    <div className='all-pic-wrapper'>
                    <Link to='/holiday'><div className='pic1-div'>
                        <p className='bottom-left'>Need holiday outfits?</p>
                        <div className='landing-pic'>
                           
                        </div>
                    </div></Link>
                    <Link to='/fallstyle'><div className='pic2-div'>
                        <p className='bottom-left'>New fall essentials</p>
                        <div className='landing-pic'>
                           
                            </div>
                    </div></Link>
                    <Link to='festive'><div className='pic3-div'>
                        <p className='bottom-left'>Festive looks we love</p>
                        <div className='landing-pic'>
                           
                            </div>
                    </div></Link>
                    </div>
                </div>
            </div>
        )
    }
}
