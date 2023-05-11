import React, { Component } from 'react'
import profilePicture from '../assets/images/profilePicture.jpg'


export default class Hero extends Component {
  render() {
    return (
      <section className='hero container'>
        <img src={profilePicture} alt="profilepicture" className='hero-img' />
        <div className='main'>
          <div className='text'>I am a</div>
          <ul className='options'>
            <li><span>Programmer</span></li>
            <li><span>Coder</span></li>
            <li><span>Designer</span></li>
            <li><span>Developer</span></li>
          </ul>
        </div>
        <p className='hero-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, rem est voluptate dolorum laborum architecto.</p>
        
      </section>
    )
  }
}
