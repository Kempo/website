import React from 'react';
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from './layout';
import SEO from './SEO';
import './post-layout.scss';
import DateDisplay from './date';

export default function PostTemplate ({ data: { mdx } }) {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <div className="article-container">
      <article>
        <h1>{mdx.frontmatter.title}</h1>
        <DateDisplay dateString={mdx.frontmatter.date} />
        <p style={{ color: '#CCC', marginTop: 0 }}>Aaron Chen</p>
        <MDXProvider>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </article>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
      }
    }
  }
`