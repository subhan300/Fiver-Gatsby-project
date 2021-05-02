import React from 'react'
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "../PagesComponents/Portfolio components/Portfolio.css"
import logo from '../../assets/blog_images/logo-name.png'
import bg from '../../assets/blog_images/portfolio image.jpg'


function Portfolio() {
  return (
    <>
      {/* <header /> */}
      <div className="port__wrapper">

        <div className="main__div_blog">
          <div className="port__avatar">
            <span>
              We can help you to digitize your business,
            </span>
            <p>we want to go beyond.</p>
            <button>Read more</button>
          </div>
          <div className="article__body">
            <h1 className="portarticle__title" >
              What Ebay Does
            </h1>
            <p className="portsubtitle">
              What transform your traditional business
              model to digital business model, creating
              a patership with our customer.
            </p>
            <br></br>
            <div className="cards">
              <div className="card__grid">
                <div className="card__text">
                  <h3>Strategy</h3>
                  <p>
                    We create a strategy  to become digital
                    available to the market, Evaluating the
                    impact to move the digiital business.
                    </p>
                </div>
              </div>
              <div className="card__grid">
                <div className="card__text">
                  <h3>Strategy</h3>
                  <p>
                    We create a strategy  to become digital
                    available to the market, Evaluating the
                    impact to move the digiital business.
                    </p>
                </div>
              </div>
              <div className="card__grid">
                <div className="card__text">
                  <h3>Strategy</h3>
                  <p>
                    We create a strategy  to become digital
                    available to the market, Evaluating the
                    impact to move the digiital business.
                    </p>
                </div>
              </div>
            </div>
            <div className="searchbar__area">
              <h2>Do you want to go beyond?</h2>
              <div className="search__input">
                <input type="text" className="searchbar" placeholder="Accounting, Engineering, Solid Works, etc" />
                <button className="search__button">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="suport__sec">
            <div className="leftSupport__Sec">
              <span className="support__title">
                Everything you need to <span className="inner__title">support you</span> in your dreams
              </span>
              <img src={bg} className="leftSecImg"/>
            </div>
            <div className="rightSupport__Sec">
              <span className="rightSec__title">Contact us</span>
              <form>
                <label>Email:</label><br/>
                <input type="text" placeholder="Enter Email"/><br/>

                <label>Subject:</label><br/>
                <input type="text" placeholder="Enter Subject"/><br/>

                <label>Describe your ideal profession:</label><br/>
                <textarea></textarea><br/>
                <button className="btn btn-primary mt-2">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div className="port__intro">
          <img src={logo} className="logo" />
          <h2>&#60;BLOG&#62;</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore.
          </p>

          <h2>&#60;POSTS RECIENTES&#62;</h2>
          <p><strong>Lorem Ipsum</strong> <br /> 04/oct2020</p>

          <p><strong>Lorem Ipsum</strong> <br /> 04/oct2020</p>

          <p><strong>Lorem Ipsum</strong> <br /> 04/oct/2020</p>

          <h2>&#60;CATEGORIAS&#62;</h2>
          <ul>
            <li>Desarallo Web</li>
            <li>Diseno Web</li>
            <li>Ecommerce</li>
            <li>SEO</li>
            <li>Elementor</li>
            <li>Otros</li>
          </ul>

          <h2>&#60;ETIQUETAS&#62;</h2>
          <span>ETIQUETA</span> <span>ETIQUETA</span><br />
          <span>ETIQUETA</span> <span>ETIQUETA</span><br />
          <span>ETIQUETA</span>
        </div>
      </div>

    </>

  )
}

export default Portfolio



