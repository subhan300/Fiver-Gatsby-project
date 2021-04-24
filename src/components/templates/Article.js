import React from 'react'
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function Articles({pageContext}) {
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


      <div>
          <h1>ARTICLE PAGES </h1>
          <br></br>
    <h3>{Title}</h3>

      </div>


    )
}

export default Articles
