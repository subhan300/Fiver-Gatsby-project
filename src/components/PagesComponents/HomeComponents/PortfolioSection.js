import React from 'react'
import './PortfolioSection.css'
import item from '../../../assets/all   images/item.jpg'

function PortfolioSection({DATA}) {
    // console.log(DATA,"DATA")

    return (
        <div>
                <section class="portafolio_section">
        <div class="container">
            <div class="header">
                <h6>&#60;PORTAFOLIO&#62;</h6>
            </div>
            <div class="row">
                 {DATA.map(val=>{
                     console.log(val,"val")
                          const Images_trim=val.images.file.url
                        //   console.log(val.portfolioShortDescription.portfolioShortDescription)
                          const image= Images_trim.replace('//','https://').trim()

                     return(
                        <div class="col-lg-3 col-md-6 py-5" >
                                         <div class="portfolio_item">
                                            <img src={image}></img>
                                      
                                          </div>
                                       <div ><p >{val.portfolioShortDescription.portfolioShortDescription}</p></div>
                        </div>
                     )
                 })}
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
