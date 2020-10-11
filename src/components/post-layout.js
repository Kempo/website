import React from 'react';
import Layout from './layout';
import './post-layout.scss';

export default ({ children }) => (
  <Layout>
    <div className="article-container">
      <article>{children}</article>
    </div>
  </Layout>
)