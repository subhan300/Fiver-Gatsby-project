
// const { Component } = require("react");


var path=require("path");
exports.createPages=async ({actions,graphql})=>{
 
  const {createPage} = actions;
  

  const result=await graphql(` {
    allContentfulBlogs {
      nodes {
     
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
    
    allContentfulPortfolios {
      nodes {
      
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
  
  
  `)
 
  // console.log("Result of my data : ",JSON.stringify(result))

  
  result.data.allContentfulBlogs.nodes.forEach(
    (obj)=>{
// console.log(obj)
    createPage({
      path:`/Blogs/${obj.slug}`,
      component:path.resolve("./src/components/templates/Blog.js"),

      context:{
          Item_Details:obj
      }
    })





  })


  result.data.allContentfulPortfolios.nodes.forEach(
    (obj)=>{
// console.log(obj)
    createPage({
      path:`/Portfolio/${obj.slug}`,
      component:path.resolve("./src/components/templates/Portfolio.js"),

      context:{
          Item_Details:obj
      }
    })





  })







}
