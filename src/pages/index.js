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
        <a href="mailto:ilestkempo@gmail.com" style={{ marginRight: 12 }}>Email</a>
        <a href="https://github.com/kempo">Github</a>
        <p><strong>Backyard</strong></p>
        <p>Stuff I like (a brief list).</p>
        <ul>
          <li><a href="https://www.youtube.com/watch?v=6BPKPb_RTwI">Drive My Car (trailer)</a></li>
          <li><a href="https://www.youtube.com/watch?v=oihHs2Errwk">Burning (trailer)</a></li>
          <li><a href="https://www.instagram.com/mmacayres/?hl=en">Mac Ayres (music)</a></li>
          <li><a href="https://www.youtube.com/watch?v=CQXSforT_qQ">If Beale Street Could Talk (trailer)</a></li>
          <li><a href="https://www.youtube.com/watch?v=Ubjylmxrj9o">A Catalogue of Afternoons (music)</a></li>
          <li><a href="https://www.lauraberger.com/">Laura Berger (art)</a></li>
          <li><a href="https://www.aimeleondore.com/">Aime Leon Dore (clothing)</a></li>
          <li><a href="https://www.youtube.com/watch?v=6BPKPb_RTwI">Drive My Car (movie)</a></li>
          <li><a href="https://www.instagram.com/ilcorvopasta/?hl=en">Il Corvo (food)</a></li>
          <li><a href="https://www.muji.com/">Muji (clothing)</a></li>
          <li><a href="https://www.youtube.com/c/Shiftteamhq">In the Lab (basketball)</a></li>
          <li><a href="https://www.rottentomatoes.com/m/dune_2021">Dune (movie)</a></li>
          <li><a href="https://www.rottentomatoes.com/m/nocturnal_animals">Nocturnal Animals (movie)</a></li>
        </ul>
        <p><strong>Pending</strong></p>
        <p>Stuff I'm looking to read.</p>
        <ul>
          <li><a href="https://www.goodreads.com/book/show/37638098-creative-selection">Creative Selection (Ken Kocienda)</a></li>
          <li><a href="https://www.goodreads.com/book/show/42036377-where-is-my-flying-car">Where is my Flying Car? (Hall)</a></li>
          <li><a href="https://www.goodreads.com/book/show/88546.Forbidden_Nation">Forbidden Nation: A History of Taiwan</a></li>
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