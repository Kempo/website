import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/SEO";

export default function Checklist() {
  return (
    <Layout>
      <SEO title="Checklist" />
      <p>Generally, places I'd like to visit or things I'd like to do.</p>
      <p>Subject to change.</p>
      <p><b>List</b></p>
      <ul>
        <li>Roden Crater by James Turrell</li>
        <li>Jazz cafe's in Japan</li>
        <li>Max Richter concert</li>
        <li>Cannes / Sundance Film Festival</li>
        <li>Be a film extra</li>
      </ul>
    </Layout>
  )
}