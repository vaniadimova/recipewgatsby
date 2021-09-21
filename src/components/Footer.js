import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillCodepenCircle} from 'react-icons/ai';
const Footer = () => {
    return (
        <footer className='page-footer'>
            <p>vaniadimova&copy; {new Date().getFullYear()}
                 <span>Simplerecipes</span>
                  delish & {""} <a href="https://www.gatsbyjs.com">Fun</a></p>
                  <div>
                  <a href="https://github.com/vaniadimova" target="_blank" rel="noopener noreferrer">
          <AiFillGithub size="3rem" />
        </a>
        <a href="https://www.linkedin.com/in/vaniadimo/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin size="3rem" />
        </a>
        <a href="https://www.instagram.com/dvania12/" target="_blank" rel="noopener noreferrer">
          <AiFillInstagram size="3rem"/>
        </a>
                  </div>
         
        </footer>
    )
}

export default Footer
