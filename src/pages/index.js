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
        <p style={{ maxWidth: 600, width: '100%' }}> 
          Hey! My name's Aaron. Right now, I'm taking time off from college to explore new things.
          I code a bit, hoop a little, and (<i>try to</i>) read often.
          On my free time, I cross up neighborhood kids at the court and love watching confusing movies. I also only ever cook Italian food.
        </p>
        <a href="https://twitter.com/tweetsbychen" style={{ marginRight: 12 }}>Twitter</a>
        <a href="/resume.pdf" style={{ marginRight: 12 }}>Resume</a>
        <a href="mailto:ilestkempo@gmail.com">Email</a>
        <p><strong>Backyard</strong></p>
        <p>
          Stuff I write. Revised & unrevised.
          <br />
          Once in a while, I'll come back to them.
        </p>
        <ul>
        {
          data.MdxFiles.edges.map(el => (
            <li key={el.node.frontmatter.title}><a href={el.node.frontmatter.path}>{el.node.frontmatter.title}</a></li>
          ))
        }
        </ul>
        <p><strong>Pending</strong></p>
        <p>Stuff I'm looking to read.</p>
        <ul>
          <li><a href="http://www.foundersatwork.com/steve-wozniak.html">Steve Wozniak Interview</a></li>
          <li><a href="https://www.goodreads.com/book/show/944652.Poor_Charlie_s_Almanack">Poor Charlie's Almanack</a></li>
          <li><a href="https://www.goodreads.com/book/show/904538.The_Book_of_Tea">The Book of Tea</a></li>
          <li><a href="https://www.goodreads.com/book/show/6321411-something-incredibly-wonderful-happens">Something wonderfully incredible happens</a></li>
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