import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function Introduction() {
  return (
    <section className='intro'>
      <h1>Welcome to the Future</h1>
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "people.png" }) {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => {
          return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        }}
      />
      <blockquote>
        Introducing you to first ever Blockchain Extension Mining Service brought to you by ExtractBot, in partnership with the Multichain decentralized platform <b>Blockchain.</b>
      </blockquote>
    </section>
  )
}