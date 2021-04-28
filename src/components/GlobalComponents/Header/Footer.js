import React from 'react'
import  './Footer.css'
import footerLogo from '../../../assets/all   images/footer-logo.png'

function Footer() {
    return (
        <div>
            
    <footer class="footer_section">
        <div class="container">
            <div class="footer_logo">
                <img src={footerLogo} alt=""/>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
            </div>
            <div class="bottom">
                <span>Copyright © 2020 <a href="">Keylen Jaimes</a>.  |  Todos los derechos reservados.</span>
                <ul>
                    <li><a href=""><i class="fab fa-facebook-square"></i></a></li>
                    <li><a href=""><i class="fab fa-instagram"></i></a></li>
                </ul>
            </div>
        </div>
    </footer>

        </div>
    )
}

export default Footer
