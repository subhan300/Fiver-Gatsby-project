import React from "react"
import "../components/PagesComponents/HomeComponents/Index.css"
import "bootstrap/dist/css/bootstrap.min.css"
// importing components
import Header from "../components/GlobalComponents/Header/Header"
import HeroSection from "../components/PagesComponents/HomeComponents/HeroSection"
import SobremiSection from "../components/PagesComponents/HomeComponents/SobremiSection"
import CounterupSection from "../components/PagesComponents/CounterupSection"
import ServiceSection from "../components/PagesComponents/HomeComponents/ServiceSection"
import SkillSection from "../components/PagesComponents/HomeComponents/SkillSection"
import PortfolioSection from "../components/PagesComponents/HomeComponents/PortfolioSection"
import TestimonialSection from "../components/PagesComponents/HomeComponents/TestimonialSection"
import BlogandContact from "../components/PagesComponents/HomeComponents/BlogandContact"
import Footer from "../components/GlobalComponents/Header/Footer"
import { graphql } from 'gatsby';
import Helmet from "react-helmet"

export default function Home({data}) {
  const Data=data.allContentfulPortfolios.nodes
  const BlogData=data.allContentfulBlogs.nodes
  // console.log(Data,"homepage data")
  const HomeData=data.allContentfulHomePage.nodes
  console.log(HomeData)
  
  return (
        <>
         <Helmet>
            <title>{HomeData.title}</title>
            <meta name="description" content={HomeData.description}></meta>
            <meta name="keywords" content={HomeData.keywords}></meta>
            <meta property="og:title" content={HomeData.title}></meta>
            <meta property="og:type" content={HomeData.type}></meta>
            <meta property="og:description" content={HomeData.description}></meta>
            <meta property="og:image" content=""></meta>
            <meta property="og:locale" content={HomeData.node_locale}></meta>
            <meta property="og:url" content={HomeData.websiteUrl}></meta>
            <link rel="canonical" href={HomeData.websiteUrl}></link>
         </Helmet>
          <Header />
          <HeroSection/>
          <SobremiSection/>
          <CounterupSection/>
          <ServiceSection/>
          <SkillSection/>
          <PortfolioSection DATA={Data} />
          <TestimonialSection/>
          <BlogandContact BlogData={BlogData}  />
          <Footer/>
        </>
  )
}




export const query = graphql`
{
  allContentfulBlogs {
    nodes {
      node_locale
      keywords
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
  allContentfulHomePage {
    nodes {
      type
      title
      description
      node_locale
      websiteUrl
      keywords
    }
  }
  allContentfulPortfolios {
    nodes {
      node_locale
      keywords
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