import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "../components/GlobalComponents/Header/Header"
import "../components/PagesComponents/BlogComponents/blog.css"
import logo from '../assets/blog_images/logo-name.png'
import avatar from '../assets/blog_images/Imagen.jpg'
import BlogSliderCard from "../components/PagesComponents/BlogComponents/BlogSliderCard"

export default function BlogEntries() {
  

  
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    responsive: [
      {breakpoint: 500, settings: {slidesToShow: 1}},
      {breakpoint: 700, settings: {slidesToShow: 1}},
      {breakpoint: 900, settings: {slidesToShow: 2}},
      {breakpoint: 1200, settings: {slidesToShow: 2}},
    ],
    slidesToScroll: 1,
  };
  
  return (
    <>
        <Header />
    
      <div className="blog__wrapper">
      
        <div className="main__div_blog">
          <div className="blog__avatar">
            <img src={avatar} />
          </div>
          <div className="article__body">
            <p className="article__date">04/OCT/2020 by Keylen James</p>
           <h1 className="article__title" >
           BLOGS POSTS
             </h1>
         
            <p>
            Runway vintage innovation prediction 
            modern attractive posture model sportswear
             color. Trade comfortable shape condition.
              Minimalist jumper quantity collection. 
              Allure shade cheap industry halter high
              heels imprint tones stitching leotard 
              skirt look. Trade phenomenon trendwatching 
              comfortable bows mainstream waistline 
              value popular mannequin couture shape 
              availability expensive. Hand-made condition 
              signature comfortable xs stitching wholesale 
              tailored ribbon quantity.
            </p> <br/>

            <p>
            Glossy bows inspiration textile trade hippie 
            ribbon sportswear. Jewelry pret-a-porter 
            prediction consumer revealing wholesale one-of-a-kind
            instagram stitching cheap stylish tones 
            modification wardrobe. Bold bargain prediction
            trademark minimalist. Zipper skirt emphasis xs 
            classic instagram. Stock pret-a-porter textile 
            etiquette instagram pastel minimalist affection. 
            Tailor glitter young. Zipper outlet quality 
            photography minimalist imagination outfit hair. 
            Proportion zipper sleeveless embroidery retailer 
            inexpensive lingerie bargain. Identity stitching 
            leotard stock. Hand-made taste outlet mode shape.
            </p><br/>

            <p>
            Modern jewelry emphasis look comfortable one-of-a-kind
             couture stitching expensive consumer pattern artificial 
             outlet affection. Tailor innovation expirement ready-made 
             unique couture combination original label synthetic 
             prediction shawl modern. Ribbon adjustment clothes bold 
             old-fashioned craftmanship halter shape wardrobe ensemble 
             revealing trade trademark. Zipper wholesale bodice. 
             Sleeveless pumps stylish illustration embroidery fashion 
             modification garment cut jumper. Effect wholesale 
             vogue stock. Impeccable photography color price trade 
             conformity synthetic prediction stitching imprint value 
             petticoat jersey. Inexpensive hanger stock accessory clothes 
             extraordinary trademark tones swag outlet influence. 
             Handbag braiding apparel availability phenomenon influence 
             production mode cut. Lingerie garment vintage 
             runway jeans couture.
            </p><br/>

            <p>
            Comfortable hippie one-of-a-kind braiding urban 
            waistline glossy creative beautiful fashion 
            xl ensemble. Skirt effect tailored revealing 
            wardrobe classic. Conformity apparel sportswear 
            quality allure hippie breathable couture illustration 
            swag cheap brand stock beautiful. Enhance model 
            photography sleeveless artificial xl casual inspiration
            waistline item. Condition cut color quality item 
            affection. Ensemble quality artistic sleeveless 
            inexpensive waistline textile clothes one-of-a-kind 
            posture tailored wholesale swim-wear instagram. 
            Expirement ribbon catwalk hand-made brand comfortable 
            clothing unique signature glossy clothes. 
            </p>
          </div>
          {/* <div className="blog__slider">
          <Slider {...settings}>
            <BlogSliderCard 
              avatar={avatar}
            />
            <BlogSliderCard 
              avatar={avatar}
            />
            <BlogSliderCard 
              avatar={avatar}
            />
        </Slider>
          </div> */}
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
      
    </>
  )
}
