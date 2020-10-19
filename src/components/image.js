import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ filename }) => {
  let imageNode = <></>

  const data = useStaticQuery(graphql`
    {
      allImageSharp {
        nodes {
          fluid(maxWidth: 900, traceSVG: { color: "#639" }) {
            originalName
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  if (!data?.allImageSharp?.nodes) {
    return <div>Picture not found</div>
  }

  const image = data.allImageSharp.nodes.find(n => {
    return n.fluid.originalName.includes(filename)
  })

  if (filename !== "") {
    imageNode = (
      <div className="mt-4">
        <figure className="image is-128x128 is-inline-block">
          <Img alt={filename} fluid={image.fluid} />
          <figcaption>{filename}</figcaption>
        </figure>
      </div>
    )
  }

  return imageNode
}

export default Image
