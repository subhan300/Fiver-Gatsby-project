<<<<<<< HEAD
import React,{useEffect} from "react"

import Header from "../components/GlobalComponents/Header/Header"


=======
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "../components/GlobalComponents/Header/Header"
import './blog.css'
import logo1 from '../assets/blog_images/logo1.png'
import logoname from '../assets/blog_images/logo-name.png'
import thumbnil from '../assets/blog_images/Imagen.jpg'
>>>>>>> 887bbd50890002d693cf867d50f81c0a0699ff4d
export default function Home() {







  return (
<<<<<<< HEAD
            <>
      
  
             
=======
    <>
      {/* <Header /> */}
      <div className="wrapper">
        <div className="header__container">
          <img src={logo1} className="logo"></img>
          <div className="container inner__container">
            <div className="row d-flex justify-content-center mx-auto">
              <div className="col-md-8">
                <div className="row">
                  <img className="thumbnil" src={thumbnil}></img>
                </div>
                <div className="row d-flex justify-content-center">
                  <p className="text-center mt-5 ">Time</p>
                </div>
                <div className="row d-flex justify-content-center">
                  <div>
                    <h1 className="text-center mt-5 ">Lorem Ipsum</h1><br />
                    <p className="text-center">Subheading</p>
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <p className=" text-center">
                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                    It has roots in a piece of classical Latin literature from 45 BC,
                    making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                    looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                    comes from a line in section 1.10.32.
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                  </p>
                </div>
              </div>
              <div className="col-md-4 border border-secondary">
                <img className="img-fluid" src={logoname}></img>
                <div className="blog-section">
                  <div className="row mt-5">
                    <h3 className="blog text-capitalize">b l o g</h3>
                    <p className="fw-light">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                  </p>
                  </div>
                </div>
                <div className="post-section">
                  <div className="row mt-5">
                    <h3 className="post-recients text-capitalize">post recients</h3>
                    <p className="fw-light">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                  </div>
                </div>
                <div className="category-section">
                  <div className="row mt-5">
                    <h3 className="categorias">C A T E G O R I A S</h3>
                  </div>
                  <div className="row mt-3">
                    <ul className="navbar-nav">
                      <li className="nav-item"><a className="nav-link">SEO</a></li>
                      <li className="nav-item"><a className="nav-link">Elemetor</a></li>
                      <li className="nav-item"><a className="nav-link">Others</a></li>
                      <li className="nav-item"><a className="nav-link">SEO</a></li>
                      <li className="nav-item"><a className="nav-link">SEO</a></li>
                    </ul>
                  </div>
                </div>
                <div className="etiquetas-section">
                  <div className="row mt-5">
                    <h3 className="post-recients text-capitalize">E T I Q U E T A S </h3>
                  </div>
                  <div className="row mt-3">
                    <div>
                      <span class="badge bg-primary mr-4">Primary</span>
                      <span class="badge bg-primary">Primary</span><br />
                      <span class="badge bg-primary mr-4">Primary</span>
                      <span class="badge bg-primary">Primary</span><br />
                      <span class="badge bg-primary">Primary</span>
                    </div>
>>>>>>> 887bbd50890002d693cf867d50f81c0a0699ff4d

                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>

      </div>
    </>

  )
}
