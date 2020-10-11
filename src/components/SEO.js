import React from 'react';
import { Helmet } from 'react-helmet';

function SEO({ title }) {
  return (
    <Helmet defaultTitle="Aaron Chen" titleTemplate="%s | Aaron Chen">
      <html lang="en" />
      <title>{title}</title>
      <meta property="og:type" content="website" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />
    </Helmet>
  )
}

export default SEO;