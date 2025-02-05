import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/SEO"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image"
import "./index.scss"

function Home({ data }) {
  return (
    <Layout>
      <SEO />
      <div style={{ marginBottom: 24 }}>
        <p>
          <strong>Me</strong>
        </p>
        <div className="profile">
          <StaticImage
            src="../assets/me_4.jpg"
            alt="Myself"
            placeholder="blurred"
            layout="fixed"
            width={300}
          />
        </div>
        <p style={{ maxWidth: 500, width: "100%" }}>
          Hey! My name's Aaron. I code a bit, hoop a little, and (<i>try to</i>)
          read often. On my free time, I cross up neighborhood kids at the court
          and love watching confusing movies. I also only ever cook Italian
          food.
        </p>
        <a href="https://twitter.com/tweetsbychen" style={{ marginRight: 12 }}>
          Twitter
        </a>
        <a href="mailto:ilestkempo@gmail.com" style={{ marginRight: 12 }}>
          Email
        </a>
        <a href="https://github.com/kempo">Github</a>
        <p style={{ marginBottom: 0, color: "#adadad", fontSize: "12px" }}>
          <i>Last Updated Feb 2025</i>
        </p>
        <br />
        <br />
        <GatsbyImage
          image={data.Kobe.childImageSharp.gatsbyImageData}
          alt="Michael Jordan guarding Kobe Bryant"
        />
        <br />
        <GatsbyImage
          image={data.Taipei.childImageSharp.gatsbyImageData}
          alt="Fujifilm scene from 'Taipei Story'"
        />
        <br />
        <GatsbyImage
          image={data.Dustballs.childImageSharp.gatsbyImageData}
          alt="Dustballs from Spirited Away"
        />
        <br />
        <GatsbyImage
          image={data.Mood.childImageSharp.gatsbyImageData}
          alt="Tony Leung in 'In the Mood for Love'"
        />
        <br />
        <GatsbyImage
          image={data.Cigarettes.childImageSharp.gatsbyImageData}
          alt="Cigarettes scene in 'Drive My Car'"
        />
        {/*
        <p>Stuff I like (a brief list).</p>
        <ul>
          <li><a href="https://www.rottentomatoes.com/m/in_the_mood_for_love_2001">In the Mood for Love (movie)</a></li>
          <li><a href="https://www.youtube.com/watch?v=6BPKPb_RTwI">Drive My Car (movie)</a></li>
          <li><a href="https://www.youtube.com/watch?v=0qz0IJXQ720">Beach House (music)</a></li>
          <li><a href="https://www.lauraberger.com/">Laura Berger (art)</a></li>
          <li><a href="https://www.aimeleondore.com/">Aime Leon Dore (clothing)</a></li>
          <li><a href="https://www.instagram.com/ilcorvopasta/?hl=en">Il Corvo (food)</a></li>
          <li><a href="https://www.muji.com/">Muji (clothing)</a></li>
          <li><a href="https://www.youtube.com/c/Shiftteamhq">In the Lab (basketball)</a></li>
          <li><a href="https://www.rottentomatoes.com/m/dune_2021">Dune (movie)</a></li>
          <li><a href="https://www.rottentomatoes.com/m/nocturnal_animals">Nocturnal Animals (movie)</a></li>
  </ul>*/}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    Dustballs: file(relativePath: { eq: "spirited-away-dust.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    Kobe: file(relativePath: { eq: "kobe.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    Mood: file(relativePath: { eq: "in-the-mood-for-love.jpeg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    Cigarettes: file(relativePath: { eq: "cigarettes.jpeg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    Taipei: file(relativePath: { eq: "taipei-story.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`

// export const query = graphql`
//   query FetchPosts {
//     MdxFiles: allMdx {
//       edges {
//         node {
//           frontmatter {
//             title
//             date
//             path
//             publish
//           }
//         }
//       }
//     }
//   }
// `;

export default Home
