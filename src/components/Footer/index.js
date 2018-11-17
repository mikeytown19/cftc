/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import config from '../../../meta/config'
import logo from '../../img/crossfit-journal.png'

const Footer = () => {
  function scrollTo(e) {
    const target = e.target.getAttribute('to');
    const position = document.querySelector(`.${target}`).offsetTop;
    window.scrollTo({
      top: position,
      behavior: 'smooth',
    })

  }
  return (
    <footer className='footer is-paddingless'>
      <div className='container has-text-centered'>
      <br/><br/>
        <div className='content columns'>
        <p className="color-white">   <a href='https://journal.crossfit.com/' target="_blank"><img style={{"width": "100px"}} src={logo} alt=''/></a></p>
         <div className="is-flex">
            <a className="color-white column flex-center " onClick={scrollTo} to='about'>About</a>
            <a className="color-white column flex-center " onClick={scrollTo} to='Scheduale'>Schedule</a>
            <a className="color-white column flex-center " onClick={scrollTo} to='plans'>Plans</a>
            <a className="color-white column flex-center " onClick={scrollTo} to='contact'>Contact</a>
         </div>
          <br/>

        </div>

      </div>
    </footer>
  )
}

export default Footer
