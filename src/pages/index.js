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


export default function Home() {
  return (
        <>
          <Header />
          <HeroSection/>
          <SobremiSection/>
          <CounterupSection/>
          <ServiceSection/>
          <SkillSection/>
          <PortfolioSection/>
          <TestimonialSection/>
          <BlogandContact/>
          <Footer/>
        </>
  )
}
