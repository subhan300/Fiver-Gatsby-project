import React from 'react'
import "./BlogEntries.css"
import thumbnail from '../../../../assets/blog_images/Imagen.jpg'
import { graphql,Link } from 'gatsby';

function BlogEntries({title,description,slug,image,short}) {

  
  
    return (
       <>
      
        <div className="blog_entries py-5 " >
          
          <div className="blog_img_div py-5"><img className="blog_img" src={image}></img></div>
          <div className="blog_content">  
                             <p className="py-1">
                               {short} 
                              <Link to={`http://localhost:8000/${slug}`}> <div className="text-center py-3"><button type="button" class="btn btn-warning ">Read More</button></div></Link>
                             
                              </p>
                             
                          

          </div>
      </div>






       </>
    )
}

export default BlogEntries

