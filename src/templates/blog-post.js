import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { rhythm } from "../utils/typography"
import _ from "lodash"

import { PostMeta } from "../components/meta"

const PostDetails = styled.div`
  & ul {
    list-style: none;
    margin: 0;

    & li {
      display: inline-block;
    }
  }
`

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx
  // const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title="Home">
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <PostMeta title={post.frontmatter.title} published={post.frontmatter.published} week={post.frontmatter.week} module={post.frontmatter.module} domains={post.frontmatter.domains} category={post.frontmatter.category} />
        </header>
        <MDXRenderer>{post.body}</MDXRenderer>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        published(formatString: "MMMM DD, YYYY")
        description
        module
        category
        week
        domains
      }
    }
  }
`
