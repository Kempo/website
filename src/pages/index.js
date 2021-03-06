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
        <p style={{ maxWidth: 500, width: '100%' }}> 
          Hey! My name's Aaron. I code a bit, hoop a little, and (<i>try to</i>) read often.
          On my free time, I cross up neighborhood kids at the court and love watching confusing movies. I also only ever cook Italian food.
        </p>
        <a href="https://twitter.com/tweetsbychen" style={{ marginRight: 12 }}>Twitter</a>
        <a href="/resume.pdf" style={{ marginRight: 12 }}>Resume</a>
        <a href="mailto:ilestkempo@gmail.com" style={{ marginRight: 12 }}>Email</a>
        <a href="https://github.com/kempo">Github</a>
        <p><strong>Backyard</strong></p>
        <p>
          Stuff I write. Revised & unrevised.
          <br />
          Once in a while, I'll come back to them.
        </p>
        <ul>
        ...
        {/* 
        {
          data.MdxFiles.edges.map(el => (
            el.node.frontmatter.publish && <li key={el.node.frontmatter.title}><a href={el.node.frontmatter.path}>{el.node.frontmatter.title}</a></li>
          ))
        }
        */}
        </ul>
        <p><strong>Pending</strong></p>
        <p>Stuff I'm looking to read.</p>
        <ul>
          <li><a href="https://www.goodreads.com/book/show/23261448-the-science-of-interstellar">The science of Interstellar (Kip Thorne)</a></li>
          <li><a href="https://www.goodreads.com/book/show/52838315-greenlights">Greenlights (Matthew McConaughey)</a></li>
          <li><a href="https://www.goodreads.com/book/show/37638098-creative-selection">Creative Selection (Ken Kocienda)</a></li>
          <li><a href="https://www.goodreads.com/en/book/show/10379147-lee-kuan-yew">Hard Truths to keep Singapore Going (Lee Kuan Yew)</a></li>
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
            publish
          }
        }
      }
    }
  }
`;

export default Home;