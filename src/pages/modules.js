import React from "react"
import { Link, graphql } from "gatsby"
import _ from "lodash"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const modules = data.allMdx.group

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="CRJ" />
      <h1>My modules</h1>
      <ul
      style={{
          listStyle: `none`,
          marginLeft: 0
      }}>
        {modules.map((item, i) => (
            <li key={i}>
                <Link to={'/module/'+_.kebabCase(item.fieldValue)} >
                    {item.fieldValue}
                </Link>
            </li>
        ))}
      </ul>
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
    allMdx {
        group(field: frontmatter___module) {
            fieldValue
        }
    }
  }
`
