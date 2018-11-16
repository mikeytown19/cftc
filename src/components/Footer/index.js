/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import config from '../../../meta/config'
import logo from '../../img/crossfit-journal.png'

const Footer = () => {
  return (
    <footer className='footer is-paddingless'>
      <div className='container has-text-centered'>
      <br/><br/>
        <div className='content columns'>
        <p className="color-white column flex-center">   <a href='https://journal.crossfit.com/' target="_blank"><img style={{"width": "100px"}} src={logo} alt=''/></a></p>
          <p className="color-white column flex-center">Home</p>
          <p className="color-white column flex-center">About</p>
          <p className="color-white column flex-center">Schedule</p>
          <p className="color-white column flex-center">Blog</p>
          <p className="color-white column flex-center">Contact</p>
           <br/>

        </div>

      </div>
    </footer>
  )
}

export default Footer
