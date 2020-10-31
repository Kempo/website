import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/SEO';
import Layout from '../components/layout';

function Books() {
  return (
    <Layout>
      <SEO title="Bookshelf"/>
      <p>
        Tidbits of knowledge and people that I've appreciated.
        <br />
        <br />
        From software to entrepreneurship to the human condition.
      </p>
      <p><strong>Talks</strong></p>
      <ul>
        <li><Link to="https://tim.blog/2016/10/27/david-heinemeier-hansson/">David Heinemeier Hansson</Link></li>
        <li><Link to="https://www.youtube.com/watch?v=3qHkcs3kG44">Naval Ravikant</Link></li>
        <li><Link to="https://www.youtube.com/watch?v=efs3QRr8LWw">Edward Snowden</Link></li>
        <li><Link to="https://www.perell.com/podcast/jason-fried">Jason Fried</Link></li>
      </ul>
      <p><strong>Texts</strong></p>
      <ul>
        <li><Link to="https://www.amazon.com/Lessons-History-Will-Durant/dp/143914995X">The Lessons of History (Will & Ariel Durant)</Link></li>
        <li><Link to="https://andymatuschak.org/books/">Andy Matsuchak on Books</Link></li>
        <li><Link to="https://sriramk.com/memos/zuck-messenger-ecosystem.pdf">Mark Zuckerberg on monetizing the Messenger ecosystem</Link></li>
        <li><Link to="https://sriramk.com/memos/BuffettRaikesemails.pdf">Warren Buffet & Jeff Zaikes on investment in Microsoft</Link></li>
        <li><Link to="https://www.goodreads.com/book/show/2547.The_Prophet">The Prophet (Gibran Khalil)</Link></li>
        <li><Link to="https://www.navalmanack.com/">The Navalmanack (Eric Jorgenson & Naval Ravikant)</Link></li>
        <li><Link to="http://www.paulgraham.com/vb.html">Life is short (Paul Graham)</Link></li>
        <li><Link to="https://www.goodreads.com/book/show/11297.Norwegian_Wood"><strong>Norwegian Wood (Haruki Murakami)</strong></Link></li>
        <li><Link to="https://www.amazon.com/Bipolar-Faith-Womans-Journey-Depression/dp/1506408591">Bipolar Faith (Dr. Monica Coleman)</Link></li>
        <li><Link to="https://www.goodreads.com/book/show/40180098-the-overstory">The Overstory (Richard Powers)</Link></li>
        <li><Link to="https://www.goodreads.com/book/show/18143977-all-the-light-we-cannot-see">All the light we cannot see (Anthony Doerr)</Link></li>
        <li><Link to="https://www.goodreads.com/book/show/4406.East_of_Eden"><strong>East of Eden (John Steinbeck)</strong></Link></li>
        <li><Link to="https://www.goodreads.com/book/show/11084145-steve-jobs"><strong>Steve Jobs (Walter Isaacson)</strong></Link></li>
        <li><Link to="https://www.goodreads.com/book/show/41022133-colorless-tsukuru-tazaki-and-his-years-of-pilgrimage">Colorless (Haruki Murakami)</Link></li>
      </ul>
      <p><strong>Artists</strong></p>
      <p>People I admire. </p>
      <p>From cinematic directors to musical composers and basketball players.</p>
      <hr style={{ width: 30, margin: '24px 0px' }}/>
      <ul>
        <li>Zach Hemsey</li>
        <li>Christopher Nolan</li>
        <li>Ridley Scott</li>
        <li>Ramin Djawadi</li>
        <li>Hans Zimmer</li>
        <li>Clint Mansell</li>
        <li>Haruki Murakami</li>
        <li>The Beatles</li>
        <li>Kobe Bryant</li>
        <li>Teddy Santis</li>
      </ul>
    </Layout>
  )
}

export default Books;