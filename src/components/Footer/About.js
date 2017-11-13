import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import reactLogo from './../../Assets/react-logo-colored.png'
import massiveLogo from './../../Assets/massive.jpg'
import nodeLogo from './../../Assets/node.png'
import postgresql from './../../Assets/postgresql-logo.png'
import reduxLogo from './../../Assets/redux.png'
import stripeLogo from './../../Assets/stripe.svg'
import css from './../../Assets/css3.png'
import Navbar from './../Navbar/Navbar'
import Footer from './Footer'
import './Footer.css'

export default class About extends Component {
  render() {
    return (
      <div className='about-page'>
        <Navbar />
       
        <div className='about-main-div'>
        <div className='about-title'></div>
        <div className='hello-text name'>Hello World, my name is Natalia!</div>
          <div className='hello-text'>For my personal project, I decided to make a clothing ecommerce website. </div>
          <div className='hello-text'>I may or may not have used some other company's material...</div>

          <div className='hello-text'>For this project I've used the following technologies:</div>
          <ul className='pic-list'>
            <li><img className='img' src={reactLogo} alt="" /></li>
            <li><img className='img' src={stripeLogo} alt=""/></li>
            <li><img className='img' id='css' src={css} alt=""/></li>
            <li><img className='img' id='massive'src={massiveLogo} alt="" /></li>
            <li><img className='img' id='node' src={nodeLogo} alt="" /></li>
            <li><img className='img' src={postgresql} alt="" /></li>
            <li><img className='img' id='redux' src={reduxLogo} alt="" /></li>
          </ul>
          </div>
          
        <Footer />
      </div>
    )
  }
}


