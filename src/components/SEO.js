import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

function SEO({ title }) {

  const { site } = useStaticQuery(graphql`
    query fetchMetadata {
      site {
        siteMetadata {
          description
          siteUrl
        }
      }
    }
  `);

  return (
    <Helmet defaultTitle="Aaron Chen" titleTemplate="%s | Aaron Chen">
      <html lang="en" />
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={site.siteMetadata.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={site.siteMetadata.siteUrl} />
      <meta name="description" content={site.siteMetadata.description} />
      <meta name="twitter:description" content={site.siteMetadata.description} />
      <meta name="twitter:title" content={title} />
      <link rel="canonical" href={site.siteMetadata.siteUrl} />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />
    </Helmet>
  )
}

export default SEO;