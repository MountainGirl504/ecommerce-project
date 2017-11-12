import React, { Component } from 'react'
import logo from './../../Assets/THE NEW YOU1.png'
import './Footer.css'
import FontAwesome from 'react-fontawesome'
import {Link} from 'react-router-dom'




export default class Footer extends Component {
  render() {
    return (
      <div className='main-footer'>
          <div className='footer-inner'>
        <div className='col-logo'>
            <div><img className='footer-logo' src={logo} alt=""/></div>
        </div>
        <div className='col-company'>
            <div>
                <ul>
                    <li><Link to='/about'>About</Link></li>
                    <li><a href='https://www.jcrew.com/aboutus/jcrew.jsp?sidecar=true'>Our Story</a></li>
                    <li><a href='https://jobs.jcrew.com/'>Careers</a></li>
                </ul>
            </div>
        </div>
        <div className='col-customer'>
            <div>
                <ul>
                    <li><a href='https://www.linkedin.com/in/natalia-calt-21598217/'>Contact the developer</a></li>
                    <li><a href='https://www.jcrew.com/help/registration_qa.jsp?sidecar=true'>FAQ</a></li>
                    <li><a href='https://www.jcrew.com/help/returns_exchanges.jsp?sidecar=true'>Return Policy</a></li>
                </ul>
            </div>
        </div>
        </div>

        
        <div className='col-connect'>
                <ul id='connect'>
                    <li><a href='https://www.facebook.com/jcrew/'>
                    <FontAwesome className='icon' name='facebook-square' size='2x'/></a></li>
                    <li><a href='https://twitter.com/jcrew?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'><FontAwesome className='icon' name='twitter' size='2x'/></a></li>
                    <li><a href='https://www.instagram.com/jcrew/?hl=en'><FontAwesome className='icon' name='instagram' size='2x'/></a></li>
                    <li><a href='https://github.com/MountainGirl504/ecommerce-project'><FontAwesome className='icon' name='github' size='2x'/></a></li>
                </ul>
        </div>
      </div>
      
    )
  }
}
