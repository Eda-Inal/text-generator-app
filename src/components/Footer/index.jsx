import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='footer' >
   
      <div className='icons'>
     
    <a href="https://github.com/Eda-Inal" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faGithub} size="2x" />
    </a>
    <a href="https://www.linkedin.com/in/eda-i%C5%9F%C4%B1l-inal-887a69267" target="_blank" rel="noopener noreferrer"> 
         <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      
      </div>
  
    </div>
  )
}

export default Footer
