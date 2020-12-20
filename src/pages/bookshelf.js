import React from 'react';
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
        From software to entrepreneurship, to the human condition.
      </p>
      <p><strong>Talks</strong></p>
      <ul>
        <li><a href="https://tim.blog/2016/10/27/david-heinemeier-hansson/">David Heinemeier Hansson</a></li>
        <li><a href="https://www.youtube.com/watch?v=3qHkcs3kG44">Naval Ravikant</a></li>
        <li><a href="https://www.youtube.com/watch?v=efs3QRr8LWw">Edward Snowden</a></li>
        <li><a href="https://www.perell.com/podcast/jason-fried">Jason Fried</a></li>
        <li><a href="https://www.youtube.com/watch?v=ji5_MqicxSo">Randy Pausch</a></li>
      </ul>
      <p><strong>Texts</strong></p>
      <ul>
        <li><a href="https://www.amazon.com/Lessons-History-Will-Durant/dp/143914995X">The Lessons of History (Will & Ariel Durant)</a></li>
        <li><a href="https://andymatuschak.org/books/">Andy Matsuchak on Books</a></li>
        <li><a href="https://sriramk.com/memos/zuck-messenger-ecosystem.pdf">Mark Zuckerberg on monetizing the Messenger ecosystem</a></li>
        <li><a href="https://sriramk.com/memos/BuffettRaikesemails.pdf">Warren Buffet & Jeff Zaikes on investment in Microsoft</a></li>
        <li><a href="https://www.goodreads.com/book/show/2547.The_Prophet">The Prophet (Gibran Khalil)</a></li>
        <li><a href="https://www.navalmanack.com/">The Navalmanack (Eric Jorgenson & Naval Ravikant)</a></li>
        <li><a href="http://www.paulgraham.com/vb.html">Life is short (Paul Graham)</a></li>
        <li><a href="https://www.goodreads.com/book/show/11297.Norwegian_Wood"><strong>Norwegian Wood (Haruki Murakami)</strong></a></li>
        <li><a href="https://www.amazon.com/Bipolar-Faith-Womans-Journey-Depression/dp/1506408591">Bipolar Faith (Dr. Monica Coleman)</a></li>
        <li><a href="https://www.goodreads.com/book/show/40180098-the-overstory">The Overstory (Richard Powers)</a></li>
        <li><a href="https://www.goodreads.com/book/show/18143977-all-the-light-we-cannot-see">All the light we cannot see (Anthony Doerr)</a></li>
        <li><a href="https://www.goodreads.com/book/show/4406.East_of_Eden"><strong>East of Eden (John Steinbeck)</strong></a></li>
        <li><a href="https://www.goodreads.com/book/show/11084145-steve-jobs"><strong>Steve Jobs (Walter Isaacson)</strong></a></li>
        <li><a href="https://www.goodreads.com/book/show/41022133-colorless-tsukuru-tazaki-and-his-years-of-pilgrimage">Colorless (Haruki Murakami)</a></li>
        <li><a href="https://www.goodreads.com/book/show/42046112-recursion">Recursion (Blake Crouch)</a></li>
        <li><a href="https://www.goodreads.com/book/show/40230101-the-mamba-mentality">The Mamba Mentality (Kobe Bryant)</a></li>
        <li><a href="https://www.goodreads.com/book/show/37004370-the-memory-police">The Memory Police (Yoko Ogawa)</a></li>
        <li><a href="https://juliagalef.com/2017/02/21/the-answer-to-life-the-universe-and-everything/">The answer to life (Julia Galef)</a></li>
        <li><a href="https://www.goodreads.com/book/show/6321411-something-incredibly-wonderful-happens">Something wonderfully incredible happens (Frank Oppenheimer)</a></li>
        <li><a href="https://www.theobservereffect.org/tobi.html">Interview with Tobi Lutke</a></li>
        <li><a href="https://www.goodreads.com/book/show/7144.Crime_and_Punishment">Delivering Happiness (Tony Hsieh)</a></li>
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
        <li>Wes Anderson</li>
      </ul>
    </Layout>
  )
}

export default Books;