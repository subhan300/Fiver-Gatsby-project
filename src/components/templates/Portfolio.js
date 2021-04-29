import React from 'react'
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "../DynamicBlogPage/BlogPages.css"
function Portfolio({pageContext}) {
    console.log(pageContext)
    const {Item_Details}=pageContext
    console.log()
    const Article_Writing=Item_Details.childContentfulReactjsVsAngularDesarticleTextNode.desarticle
    const Image=Item_Details.images[0].file.url
    const l= Image.replace('//','https://').trim()
    const Title=Item_Details.title
    console.log(Title,"title")
    console.log(l)


    return (


      <div className="Blog_page">
          <h1>{Title}</h1>
          <br></br>
  
          <img src={Image}></img>

          <p>This is my portfolio page </p>

      </div>


    )
}

export default Portfolio





// import React from 'react'
// // import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import "../DynamicBlogPage/BlogPages.css"
// function Articles({pageContext}) {
//     console.log(pageContext)
//     const {Item_Details}=pageContext
//     console.log()
//     const Article_Writing=Item_Details.childContentfulReactjsVsAngularDesarticleTextNode.desarticle
//     const Image=Item_Details.images[0].file.url
//     const l= Image.replace('//','https://').trim()
//     const Title=Item_Details.title
//     console.log(Title,"title")
//     console.log(l)


//     return (


//       <div className="Blog_page">
//           <h1>{Title}</h1>
//           <br></br>
  
//           <img src={Image}></img>

//           <p>This is my Blog page </p>

//       </div>


//     )
// }

// export default Articles
