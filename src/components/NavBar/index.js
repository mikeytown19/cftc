/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import Link from 'gatsby-link'
import NavLogo from './../../img/nav-img.jpg'


const NavBar = () => {

  function scrollTo(e) {
    const target = e.target.getAttribute('to');
    const position = document.querySelector(`.${target}`).offsetTop;
    window.scrollTo({
      top: position,
      behavior: 'smooth',
    })

  }

  return (
    <div className='navbar-container'>
      <nav className='navbar' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <img className='nav-image-logo' src={NavLogo} alt='Nav logo image' />
          </Link>
          <button className='button navbar-burger' data-target='navMenu'>
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className='navbar-menu' id='navMenu'>
          <div className='navbar-start'>
            <a className='navbar-item' onClick={scrollTo} to='about'>
                          About
            </a>
            <a className='navbar-item' onClick={scrollTo} to='schedule'>
                          Schedule
            </a>
            <a className='navbar-item' onClick={scrollTo} to='plans'>
                          Plans
            </a>
          </div>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='field is-grouped'>
                <p className='control'>
                  <a
                    className='button is-primary is-outlined'
                    to='contact' onClick={scrollTo}>
                                      Contact Us
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
