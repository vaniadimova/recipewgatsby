import React from 'react'


const Footer = () => {
    return (
        <footer className='page-footer'>
            <p>vaniadimova&copy; {new Date().getFullYear()}
                 <span>simplerecipes</span>
                  .built with {""} <a href="https://www.gatsbyjs.com">Gatsby v-3</a></p>
         
        </footer>
    )
}

export default Footer
