import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from '../components/layout';
import SEO from '../components/SEO';

function Visuals({ data }) {
  return (
    <Layout>
      <SEO title="Visuals" />
      <GatsbyImage
        image={data.Dustballs.childImageSharp.gatsbyImageData}
        alt="Dustballs from Spirited Away" />
        <br />
      <GatsbyImage
        image={data.Kobe.childImageSharp.gatsbyImageData}
        alt="Michael Jordan guarding Kobe Bryant" />
        <br />
      <GatsbyImage
        image={data.Mood.childImageSharp.gatsbyImageData}
        alt="Tony Leung in 'In the Mood for Love'" />
    </Layout>
  );
}

export const query = graphql`{
  Dustballs: file(relativePath: {eq: "spirited-away-dust.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  Kobe: file(relativePath: {eq: "kobe.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  Mood: file(relativePath: {eq: "in-the-mood-for-love.jpeg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`;

export default Visuals;