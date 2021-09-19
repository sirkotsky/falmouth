import React, {useState}  from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import PropTypes from "prop-types"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

// Components
import { Link, graphql } from "gatsby"

const Filter = styled.div`
  font-size: 12px;

  & button {  
    padding: 4px 8px;
    background: var(--lightBg);

    &.active {
      background: var(--textLink);
      color: var(--lightBg)
    }
  }
  @media only screen and (min-width: 768px) {
    & button {
      display: inline-block;
    }
  }
  @media only screen and (max-width: 768px) {
    & button {
      display: block;
      margin-bottom: 4px;
    }
  }
`

const ModulePage = ({ pageContext, data }) => {
  const { module } = pageContext
  const { edges, totalCount, group } = data.allMarkdownRemark
  const moduleHeader = `${totalCount} note${
    totalCount === 1 ? "" : "s"
  } in "${module}"`

  const siteTitle = data.site.siteMetadata.title

  const [state, setState] = useState({
    category: false
  });

  const filterCategory = (val) => {
    setState({
      ...state,
      category: val
    })
  };

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Module entries" 
      />
      <h1>{moduleHeader}</h1>
      <Filter>
        <button onClick={() => filterCategory(false)} className={!state.category ? "active" : ""}> Show all</button>
        {group.map((item, i) => (
          <button onClick={() => filterCategory(item.fieldValue)} className={item.fieldValue == state.category ? "active" : ""}>
            {item.fieldValue}
          </button>
        ))}
      </Filter>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title, date, description, category } = node.frontmatter
          if(state.category && state.category !== category) return false
        
          else return (
            <article key={slug} category={category}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={slug}>
                    {title}
                  </Link>
                </h3>
                <small>{date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: description
                  }}
                />
              </section>
            </article>
          )
        })}
      </ul>
    </Layout>
  )
}

module.propTypes = {
  pageContext: PropTypes.shape({
    module: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default ModulePage

export const pageQuery = graphql`
  query($module: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { module: { in: [$module] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            category
          }
        }
      }
      group(field: frontmatter___category) {
        fieldValue
      }
    }
  }
`