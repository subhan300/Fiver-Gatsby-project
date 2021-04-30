import React from 'react'
import './BlogandContact.css'


import blogShape from '../../../assets/all   images/blog-shape.png'
import BlogSlider from '../../../assets/all   images/blog-slider.jpg'
import {Link} from "gatsby"
function BlogandContact({BlogData}) {
    
   
    return (
        <div>
                <section class="blog-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="blog_left">
                        <h6>&#60;BLOG&#62;</h6>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing  minim veniam.</h1>
                        <div class="blog_shape">
                            <img src={blogShape} alt=""/>
                        </div>
                        <div class="contact_section">
                            <div class="contact_left">
                                <h6>&#60;CONTACTO&#62;</h6>
                                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing minim veniam.</h2>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <h4>GENERAL</h4>
                                        <a href="">info@dominio.com</a>
                                        <a href="">0033 2313 312 443</a>
                                    </div>
                                    <div class="col-sm-6">
                                        <h4>OFICINA</h4>
                                        <p>459 Brodway <br/> New York, NY 1233</p>
                                        <a href="">(312) 323-4355</a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="blog_right">
                        <div class="slider_area owl-carousel">
                          
                                    {BlogData.map(val => {
                                        const Images_trim = val.images[0].file.url
                                        const image = Images_trim.replace('//', 'https://').trim()

                                        const description = val.childContentfulReactjsVsAngularDesarticleTextNode
                                        console.log(val.shortDescription, "sjsjjjsj")

                                        return (

                                                  


                                                       
                                            <div class="item">
                                                <img src={image} alt="" />
                                                <p>{val.shortDescription.shortDescription}</p>
                                                <Link to={`http://localhost:8000/Blogs/${val.slug}`}> <div className="text-center py-3"><button type="button" class="btn btn-warning ">Read More</button></div></Link>
                             
                                            </div>
                                          
                                              


                                        )
                                    })}
                        
                            {/* <div class="item">
                                <img src={BlogSlider} alt=""/>
                            </div>
                            <div class="item">
                                <img src={BlogSlider} alt=""/>
                            </div>
                            <div class="item">
                                <img src={BlogSlider} alt=""/>
                            </div>
                            <div class="item">
                                <img src={BlogSlider} alt=""/>
                            </div>
                            <div class="item">
                                <img src={BlogSlider} alt=""/>
                            </div>
                            <div class="item">
                                <img src={BlogSlider} alt=""/>
                            </div> */}
                        </div>
                        <div class="slider_content">
                            <h4>4/OCT/2020</h4>
                            <h1>Lorem ipsum</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                            <Link  class="theme_btn" to="http://localhost:8000/Blog/">Read ALL </Link>
                        </div>
                    </div>

                    <div class="contact_section">
                        <form class="contact_form" >
                            <div class="input_group">
                                <input class="form-control " type="text" placeholder="first Name"/>
                                <input class="form-control " type="text" placeholder="last Name"/>
                            </div>
                            <input class="form-control" type="text" placeholder="Your Subject"/>
                            <input class="form-control" type="text" placeholder="Your E-mail"/>
                            <textarea name=""></textarea>
                            <button class="theme_btn" type="button">ENVIAR</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </div>
    )
}

export default BlogandContact
