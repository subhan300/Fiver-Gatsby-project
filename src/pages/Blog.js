import React from 'react'
import HeroSection from "../components/PagesComponents/HomeComponents/HeroSection"
import "../components/PagesComponents/BlogComponents/BlogEntries/BlogEntries"
import BlogEntries from '../components/PagesComponents/BlogComponents/BlogEntries/BlogEntries'
import { graphql } from 'gatsby';
export default function Blog({data}) {
    const Data=data.allContentfulReactjsVsAngular.nodes
    // console.log(Data)
 
  
    // const Test=data.allContentfulTestingPurpose.nodes
    // console.log(Test,"tetpuepose")
    // Test
    //     .filter(city => city.featuredBoolean==false)
    //     .map(city => console.log(city.title,"dekh ab zara"));
    return (
        <div style={{width:"100%",border:"2px solid yellow"}}>
            <HeroSection />
            <h1 className="text-center py-5" style={{fontSize:"60px"}}>Visit Our Blogs</h1>
           {Data.map(val=>{
                 const Images_trim=val.images[0].file.url
                 const image= Images_trim.replace('//','https://').trim()
              
                 const description=val.childContentfulReactjsVsAngularDesarticleTextNode
                 console.log( val.shortDescription,"sjsjjjsj")

               return(
               <>
               <BlogEntries title={val.title} slug={val.slug} description={description.desarticle} short={val.shortDescription.shortDescription}  image={image} />



               </>
           )})}
        </div>
    )
}






export const query = graphql`
{
  allContentfulReactjsVsAngular {
    nodes {
      title
      shortDescription {
        shortDescription
      }

      images {
        file {
          url
        }
      }
      childContentfulReactjsVsAngularDesarticleTextNode {
        desarticle
      }

      slug
    }
  }
  allContentfulImportanceOfRedux {
    nodes {
      reduxinrealworld {
        reduxinrealworld
      }
      images {
        file {
          url
        }
      }
      portfolioShortDescription {
        portfolioShortDescription
      }
      
    }
  }
   
  allContentfulTestingPurpose {
    nodes {
      description
      title
      featuredBoolean
    }
  }

}
`