import React from 'react'
import './PortfolioSection.css'
import item from '../../../assets/all   images/item.jpg'

function PortfolioSection() {
    return (
        <div>
                <section class="portafolio_section">
        <div class="container">
            <div class="header">
                <h6>&#60;PORTAFOLIO&#62;</h6>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6">
                    <div class="portfolio_item">
                        <img src={item} alt=""/>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="portfolio_item">
                        <img src={item} alt=""/>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="portfolio_item">
                        <img src={item} alt=""/>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="portfolio_item">
                        <img src={item} alt=""/>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="portfolio_item">
                        <img src={item} alt=""/>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="portfolio_item">
                        <img src={item} alt=""/>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="portfolio_item">
                        <img src={item} alt=""/>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="portfolio_item">
                        <img src={item} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </div>
    )
}

export default PortfolioSection
