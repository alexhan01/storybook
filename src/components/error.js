import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./errors.module.scss"

function Error() {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "404.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
      <div className={styles.main}>
          <div className={styles.filler}>
            <p className={styles.message}>Error 404: Page Not Found</p>
          </div>
          <div className={styles.container}>
            <div></div>
            <div>
              <Img fluid={data.placeholderImage.childImageSharp.fluid} className={styles.calvin}/>
            </div>
          </div>
          <div className={styles.filler}></div>
      </div>
  )
}

export default Error