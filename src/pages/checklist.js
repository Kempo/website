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
        <li>Hikaru Museum</li>
        <li>Mulholland Drive</li>
        <li>Hollyhock House</li>
        <li>NYC Comedy Club (Comedy Cellar, etc)</li>
        <li>Eat pinsa</li>
        <li>Learn a style of dancing (salsa?)</li>
        <li>Get the materials for a hoodie and sew it from scratch</li>
        <li>Write a book</li>
        <li>Learn how to make ceramics (ie. cups)</li>
        <li>Thrifting in Shibuya</li>
        <li>Try true Texas barbeque</li>
      </ul>
    </Layout>
  )
}