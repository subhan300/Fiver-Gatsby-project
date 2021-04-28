
const { Component } = require("react");


var path=require("path");
exports.createPages=async ({actions,graphql})=>{
 
  const {createPage} = actions;
  

  const result=await graphql(` {
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
  }
  
  
  `)
 
  console.log("Result of my data : ",JSON.stringify(result))

  
  result.data.allContentfulReactjsVsAngular.nodes.forEach(
    (obj)=>{
console.log(obj)
    createPage({
      path:`/Blogs/${obj.slug}`,
      component:path.resolve("./src/components/templates/Blog.js"),

      context:{
          Item_Details:obj
      }
    })





  })


  result.data.allContentfulImportanceOfRedux.nodes.forEach(
    (obj)=>{
console.log(obj)
    createPage({
      path:`/Portfolio/:id`,
      component:path.resolve("./src/components/templates/Portfolio.js"),

      context:{
          Item_Details:obj
      }
    })





  })







}
