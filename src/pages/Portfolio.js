import React from "react"
import Header from "../components/GlobalComponents/Header/Header"

import { graphql } from 'gatsby';
export default function Home({data}) {

  // console.log(data)
  const Data=data.allContentfulReactjsVsAngular.nodes
  const Test=data.allContentfulTestingPurpose.nodes
  console.log(Test,"tetpuepose")
  Test
      .filter(city => city.featuredBoolean==false)
      .map(city => console.log(city.title,"dekh ab zara"));
  
  
  
  
  
    return (
              <>
               <Header />
               <div > Portfolio Page</div>
  
    {Data.map(val=>{return(<><ul>
      <li>{val.title}</li>
      
      </ul></>)})}
  
               
  
  
  
  
              </>
               
               )
  }
  
  export const query = graphql`
  {
    allContentfulReactjsVsAngular {
      nodes {
        title
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
  