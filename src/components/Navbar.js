import classNames from 'classnames';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logomark from '../img/logomark.svg';



const Navbar = () => {

    const [ navbarOpen, setNavbarOpen ] = useState(false)

    return (
      <nav className="flex flex-wrap items-center md:px-36 py-3 bg-white mb-3 fixed w-full z-20 top-0 opacity-90">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full flex justify-between lg:w-auto lg:justify-start">
            <Link to="/">
              <img 
                src={logomark} 
                alt='logomark'
                className='w-16 whitespace-nowrap inline-block mr-4 py-2'
              />
            </Link>
            <button
              className="text-gray-900 cursor-pointer text-xl leading-none px-3 py-0 lg:hidden block"
              type="button"
              aria-label="open"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div
            className={classNames([
              "lg:flex flex-grow items-center" 
              + (navbarOpen ? " flex justify-end text-left" : " hidden")
            ])}
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="tracking-wider px-3 py-2 flex items-center text-xs font-extrabold leading-snug text-gray-900 hover:opacity-75"
                  href="#projects"
                >
                  <span className="ml-2">Progetti</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="tracking-wider px-3 py-2 flex items-center text-xs font-extrabold leading-snug text-gray-900 hover:opacity-75"
                  href="#about-me"
                >
                  <span className="ml-2">Chi sono</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="contact-cta bg-sky-100 md:bg-white"
                  href="#contact"
                >
                  <span className="ml-2">Contattami &nbsp; &gt;</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    
    )
}

export default Navbar
