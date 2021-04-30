import React from 'react'
import HeroSection from "../components/PagesComponents/HomeComponents/HeroSection"
import "../components/PagesComponents/BlogComponents/BlogEntries/BlogEntries"
import BlogEntries from '../components/PagesComponents/BlogComponents/BlogEntries/BlogEntries'
import { graphql } from 'gatsby';
import Header from "../components/GlobalComponents/Header/Header"
export default function Blog({data}) {
    const Data=data.allContentfulBlogs.nodes
    // console.log(Data)
 
  
    // const Test=data.allContentfulTestingPurpose.nodes
    // console.log(Test,"tetpuepose")
    // Test
    //     .filter(city => city.featuredBoolean==false)
    //     .map(city => console.log(city.title,"dekh ab zara"));
    return (
        <div style={{width:"100%"}}>
            <Header />
            <HeroSection />
            <h1 className="text-center py-5" style={{fontSize:"60px"}}>Visit Our Blogs</h1>
           {Data.map(val=>{
                 const Images_trim=val.images[0].file.url
                 const image= Images_trim.replace('//','https://').trim()
             
               return(
               <>
                  <BlogEntries title={val.title} slug={`Blogs/${val.slug}`} description={val.desarticle} short={val.shortDescription.shortDescription}  image={image} />
                 
             

               </>
           )})}
        </div>
    )
}






export const query = graphql`
{
  allContentfulBlogs {
    nodes {
      slug
      title
      shortDescription {
        shortDescription
      }
      childrenContentfulBlogsDesarticleTextNode {
        desarticle
      }
      featuredblogs
      images {
        file {
          url
        }
      }
    }
  }
  allContentfulPortfolios {
    nodes {
      title
      slug
      reduxinrealworld {
        reduxinrealworld
      }
      portfolioShortDescription {
        portfolioShortDescription
      }
      images {
        file {
          url
        }
      }
      featuredportfolio
    }
  }
}
`