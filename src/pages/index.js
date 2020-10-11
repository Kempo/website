import React from "react";
import { graphql } from "gatsby";
import Layout from '../components/layout';
import SEO from '../components/SEO';

function Home({ data }) {
  return (
    <Layout>  
      <SEO />
      <div style={{ marginBottom: 24 }}>
        <p><strong>Now</strong></p>
        <p style={{ maxWidth: 600, width: '100%', color: '#3c3c3c' }}> 
          Hey! My name's Aaron. Right now, I'm taking time off from college to explore new things.
          I code a bit, hoop a little, and (<i>try to</i>) read often.
          On my free time, I cross up neighborhood kids at the court and love watching confusing movies. I also only ever cook Italian food.
        </p>
        <a href="https://twitter.com/tweetsbychen">Twitter</a>
        <p><strong>Thoughts</strong></p>
        <ul>
        {
          data.MdxFiles.edges.map(el => (
            <li key={el.node.frontmatter.title}><a href={el.node.frontmatter.path}>{el.node.frontmatter.title}</a></li>
          ))
        }
        </ul>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query FetchPosts {
    MdxFiles: allMdx {
      edges {
        node {
          frontmatter {
            title
            date
            path
          }
        }
      }
    }
  }
`;

export default Home;