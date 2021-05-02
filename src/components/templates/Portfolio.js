import React from 'react'
import image from '../../assets/portfolio_images/business-medium.jpg'
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "../PagesComponents/Portfolio_Component/Portfolio.css"
import logo from '../../assets/blog_images/logo-name.png'
function Portfolio() {
   

    return (


      <div className="portfolio_wrapper">
       <div className="main__div__portfolio">
         <div className="portfolio__avatar">
         <img src={image} className="img-fluid business-image"></img>
         <h1 className="heading-1">We can help you to<br />
          Digitize your<br />
          Bussiness
          </h1>
          <p>We want to go beyond</p>
          <button>sdasdas</button>
         </div>
         <div className="second__section">
         <h1>sdsdasdas</h1>
         <div className="card-section">
         <div className="card" style={{width:"13rem"}}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div className="card" style={{width:"13rem"}}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div className="card" style={{width:"13rem"}}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
         </div>
        
         </div>
       </div>
       <div className="blog__intro">
          <img src={logo} className="logo"/>
          <h2>&#60;BLOG&#62;</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore.
          </p>

          <h2>&#60;POSTS RECIENTES&#62;</h2>
          <p><strong>Lorem Ipsum</strong> <br/> 04/oct2020</p>
          
          <p><strong>Lorem Ipsum</strong> <br/> 04/oct2020</p>
          
          <p><strong>Lorem Ipsum</strong> <br/> 04/oct/2020</p>

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
          <span>ETIQUETA</span> <span>ETIQUETA</span><br/>
          <span>ETIQUETA</span> <span>ETIQUETA</span><br/>
          <span>ETIQUETA</span>
        </div>
      

      </div>


    )
}

export default Portfolio



