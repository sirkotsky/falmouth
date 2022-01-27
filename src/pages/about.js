import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Text = styled.p`
  line-height: 1.75
`

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const author = data.site.siteMetadata.author
  const social = data.site.siteMetadata.social

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="CRJ" />
      <h1>About this journal</h1>
      <Text>
          My name is <strong>{author.name}</strong>, I am a UX Lead at Aleph Singapore and a Master's student at Falmouth University. 
          As part of my assignment, I am documenting my learning experiences: reflecting on the journey, identifying the challenges, suggesting the next possible actions.
      </Text>
      <Text>
          I built this website using <a href="https://www.gatsbyjs.com" target="_black" rel="noreferrer">Gatsby</a>. It runs on Markdown, fed from <a href="https://obsidian.md" target="_blank" rel="noreferrer">Obsidian</a> — a powerful knowledge base tool. 
          Feel free to <a href="mailto:hi@kotsky.me">drop me an email</a> or add me on <a target="_blank" rel="noreferrer" href={`https://linkedin.com/in/${social.linkedin}`}>add me on LinkedIn</a>.
      </Text>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
          summary
        }
        social {
          twitter
          linkedin
        }
      }
    }
  }
`
