import React from 'react'
import HeroSection from "../components/PagesComponents/HomeComponents/HeroSection"
import "../components/PagesComponents/BlogComponents/BlogEntries/BlogEntries"
import BlogEntries from '../components/PagesComponents/BlogComponents/BlogEntries/BlogEntries'
import { graphql } from 'gatsby';
import Header from "../components/GlobalComponents/Header/Header"
import Helmet from "react-helmet"
export default function Blog({data}) {
    const Data=data.allContentfulBlogs.nodes
     
    return (
        <div style={{width:"100%"}}>
          
            <Header />
            <Helmet>
            <title>ALL BLOGS POST</title>
            <meta name="description" content="this is my blog page were all blogs are displayed"></meta>
            <meta name="keywords" content="blogs website all popular blog"></meta>
            <meta property="og:title" content="ALL BLOGS POST"></meta>
            <meta property="og:type" content="blog posts"></meta>
            <meta property="og:description" content="this is my blog page were all blogs are displayed"></meta>
            <meta property="og:image" content=""></meta>
            <meta property="og:locale" content={Data.node_locale}></meta>
            <meta property="og:url" content="http://localhost:8000/Blog"></meta>
            <link rel="canonical" href="http://localhost:8000/Blog" ></link>
         </Helmet>
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