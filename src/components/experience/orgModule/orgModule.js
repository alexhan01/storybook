import React from "react"
import styles from "./orgModule.module.scss"

// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

// Pass name -> create relative path -> give query that reletive path -> returns image as .js 
// separate styling of each image exists in orgModule.module.scss
// overall group is creates from orgs.js which runs creates orgModule.js
//      out of each element in images/orgs
// const CompanyLogo = ({name}) => {
//     const path = orgs/{name}.png
//     const data = useStaticQuery(graphql`
//       query {
//         placeholderImage: file(relativePath: { eq: "{name}.png" }) {
//           childImageSharp {
//             fluid(maxWidth: 300) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     `)
  
//     return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
//   }
  
//   export default CompanyLogo

function OrgModule(props) {
    return (
        <>
        <div>
            <div>
                <p>
                    {props.project.title}
                </p>
                <p>
                    {props.project.github}
                </p>
            </div>
            <div>
                <p>
                    {props.project.description}
                </p>
            </div>
            <div>
                <p>
                    {props.project.tags}
                </p>
            </div>
        </div>
        </>
    )
}

export default OrgModule