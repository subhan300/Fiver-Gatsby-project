import React from 'react'
import './HeroSection.css'

import logo from '../../../assets/all   images/logo.png'

function HeroSection() {
    return (
        <section class="hero_section">
        <div class="container">
            <div class="hero_content">
                <h6>¡HOLA!</h6>
                <h1>Soy Keylen.</h1>
                <h4>&#60;Ecommerce strategist&#62;</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaUt enim ad minim.</p>
                <a href="#" class="theme_btn">CONOCEME</a>
                <div class="hero_logo">
                    <a href="#"><img src={logo} alt=""/></a>
                </div>
            </div>
        </div>
    </section>
    )
}

export default HeroSection