import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/SEO';

function Visuals({ data }) {
  return (
    <Layout>
      <SEO title="Visuals" />
      <Img fluid={data.Dustballs.childImageSharp.fluid} alt="Dustballs from Spirited Away" />
    </Layout>
  )
}

export const query = graphql`
query {
  Dustballs: file(relativePath: {eq: "spirited-away-dust.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`;

export default Visuals;