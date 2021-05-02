import React from 'react'
import HeroSection from "../components/PagesComponents/HomeComponents/HeroSection"
import "../components/PagesComponents/BlogComponents/BlogEntries/BlogEntries"
import BlogEntries from '../components/PagesComponents/BlogComponents/BlogEntries/BlogEntries'
import { graphql } from 'gatsby';
import Header from "../components/GlobalComponents/Header/Header"
export default function Blog({data}) {
    const Data=data.allContentfulPortfolios.nodes
    // console.log(Data)
    
  
  
    return (
        <div style={{width:"100%"}}>
            <Header />
            <Helmet>
            <title>ALL Portfolio POST</title>
            <meta name="description" content="this is my Portfolio page were all blogs are displayed"></meta>
            <meta name="keywords" content="portfolios website all popular blog"></meta>
            <meta property="og:title" content="ALL portfolios POST"></meta>
            <meta property="og:type" content="portfolios posts"></meta>
            <meta property="og:description" content="this is myportfolios page were all portfolios are displayed"></meta>
            <meta property="og:image" content=""></meta>
            <meta property="og:locale" content={Data.node_locale}></meta>
            <meta property="og:url" content="http://localhost:8000/Portfolio"></meta>
            <link rel="canonical" href="http://localhost:8000/Portfolio" ></link>
         </Helmet>
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