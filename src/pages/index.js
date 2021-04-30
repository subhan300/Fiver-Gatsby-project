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


export default function Home({data}) {
  const Data=data.allContentfulImportanceOfRedux.nodes
  const BlogData=data.allContentfulReactjsVsAngular.nodes
  console.log(Data,"homepage data")

  return (
        <>
          {/* <Header /> */}
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
      portfolioShortDescription {
        portfolioShortDescription
      }
      images {
        file {
          url
        }
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