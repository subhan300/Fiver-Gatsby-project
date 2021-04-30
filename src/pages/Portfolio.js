import React from 'react'
import HeroSection from "../components/PagesComponents/HomeComponents/HeroSection"
import "../components/PagesComponents/BlogComponents/BlogEntries/BlogEntries"
import BlogEntries from '../components/PagesComponents/BlogComponents/BlogEntries/BlogEntries'
import { graphql } from 'gatsby';
import Header from "../components/GlobalComponents/Header/Header"
export default function Blog({data}) {
    const Data=data.allContentfulPortfolios.nodes
    console.log(Data)
    
  
    // const Test=data.allContentfulTestingPurpose.nodes
    // console.log(Test,"tetpuepose")
    // Test
    //     .filter(city => city.featuredBoolean==false)
    //     .map(city => console.log(city.title,"dekh ab zara"));
    return (
        <div style={{width:"100%"}}>
            <Header />
            <HeroSection />
            <h1 className="text-center py-5" style={{fontSize:"60px"}}>Visit Our Portfolios</h1>
            {
              Data.map(val=>{
                // console.log(val.reduxinrealworld.reduxinrealworld)
                const Image=val.images.file.url
                const image= Image.replace('//','https://').trim()
                return(
                  <>

<BlogEntries title={val.title} slug={`Portfolio/${val.slug}`} description={val.reduxinrealworld.reduxinrealworld} short={val.portfolioShortDescription.portfolioShortDescription}  image={image} />


                  </>
                )
              })
            }
        
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