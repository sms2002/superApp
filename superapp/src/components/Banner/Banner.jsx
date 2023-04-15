import React from 'react'
import logo from '../../assets/music.png'
import './Banner.css'
function Banner() {
  return (
    <div>
        <img className="music"src={logo}alt="music" />
        <h1 className='header'>Discover new things on <br/>Superapp</h1>
        <div className='flexitems'>
        <p className='account'>Already have an account?</p>
        <button className='buttonbanner'>LOGIN</button>
        </div>
    </div>
  )
}

export default Banner
