import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"

function Books({ data }) {
  return (
    <Layout>
      <SEO title="Bookshelf" />
      <GatsbyImage
        image={data.YiYi.childImageSharp.gatsbyImageData}
        alt="Yang Yang and NJ at McDonalds in Yi-Yi"
      />
      <br />
      {/* <div
        style={{
          textAlign: "center",
          color: "grey",
          textDecorationStyle: "wavy",
        }}
      >
        <p>
          <i>
            "I want to tell people things they don't know. Show them things they
            can't see. I think it'll be so much fun."
          </i>
        </p>
        <p> Yang-Yang, 8 years old</p>
        <br />
      </div> */}
      <p>
        <strong>Bookshelf</strong>
      </p>
      <p>
        Tidbits of knowledge, people, and things that I've appreciated.
        <br />
        <br />
        From software to entrepreneurship, to the human condition.
      </p>
      <p>
        <strong>Texts</strong>
      </p>
      <ul>
        <li>
          <a href="https://www.goodreads.com/book/show/2122.The_Fountainhead">
            <strong>The Fountainhead (Ayn Rand)</strong>
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/book/show/13136146-the-listening-book">
            The Listening Book (W.A. Mathieu)
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/en/book/show/26077627">
            A Grief Observed (C.S. Lewis)
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/book/show/15823480-anna-karenina">
            <strong>Anna Karenina (Leo Tolstoy)</strong>
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/cs/book/show/14817">
            A Scanner Darkly (Philip K. Dick)
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/book/show/28922.An_Artist_of_the_Floating_World">
            An Artist of the Floating World (Kazuo Ishiguro)
          </a>
        </li>
        <li>
          Kevin Kelly's{" "}
          <a href="https://kk.org/thetechnium/68-bits-of-unsolicited-advice/">
            bits
          </a>{" "}
          <a href="https://kk.org/thetechnium/99-additional-bits-of-unsolicited-advice/">
            of
          </a>{" "}
          <a href="https://kk.org/thetechnium/103-bits-of-advice-i-wish-i-had-known/">
            advice
          </a>
        </li>
        <li>
          <a href="http://bulletin-archive.kenyon.edu/x4280.html">
            <b>This is Water (David Foster Wallace)</b>
          </a>
        </li>
        <li>
          <a href="https://www.amazon.com/Lessons-History-Will-Durant/dp/143914995X">
            The Lessons of History (Will & Ariel Durant)
          </a>
        </li>
        <li>
          <a href="https://andymatuschak.org/books/">Andy Matsuchak on Books</a>
        </li>
        <li>
          <a href="https://sive.rs/kimo">
            <b>There is no speed limit (Derek Sivers)</b>
          </a>
        </li>
        <li>
          <a href="https://sriramk.com/memos/zuck-messenger-ecosystem.pdf">
            Mark Zuckerberg on monetizing the Messenger ecosystem
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/book/show/44767458-dune">
            <strong>Dune (Frank Herbert)</strong>
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/book/show/44492285-dune-messiah">
            Dune Messiah (Frank Herbert)
          </a>
        </li>
        <li>
          <a href="https://sriramk.com/memos/BuffettRaikesemails.pdf">
            Warren Buffet & Jeff Zaikes on investment in Microsoft
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/book/show/2547.The_Prophet">
            The Prophet (Gibran Khalil)
          </a>
        </li>
        <li>
          <a href="https://www.navalmanack.com/">
            The Navalmanack (Eric Jorgenson & Naval Ravikant)
          </a>
        </li>
        <li>
          <a href="http://www.paulgraham.com/vb.html">
            Life is short (Paul Graham)
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/book/show/11297.Norwegian_Wood">
            <strong>Norwegian Wood (Haruki Murakami)</strong>
          </a>
        </li>
        <li>
          <a href="https://www.amazon.com/Bipolar-Faith-Womans-Journey-Depression/dp/1506408591">
            Bipolar Faith (Dr. Monica Coleman)
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/book/show/40180098-the-overstory">
            The Overstory (Richard Powers)
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/book/show/18143977-all-the-light-we-cannot-see">
            All the light we cannot see (Anthony Doerr)
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/book/show/4406.East_of_Eden">
            <strong>East of Eden (John Steinbeck)</strong>
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/book/show/11084145-steve-jobs">
            <strong>Steve Jobs (Walter Isaacson)</strong>
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/book/show/41022133-colorless-tsukuru-tazaki-and-his-years-of-pilgrimage">
            Colorless (Haruki Murakami)
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/book/show/42046112-recursion">
            Recursion (Blake Crouch)
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/book/show/40230101-the-mamba-mentality">
            The Mamba Mentality (Kobe Bryant)
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/book/show/37004370-the-memory-police">
            The Memory Police (Yoko Ogawa)
          </a>
        </li>
        <li>
          <a href="https://juliagalef.com/2017/02/21/the-answer-to-life-the-universe-and-everything/">
            The answer to life (Julia Galef)
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/book/show/6321411-something-incredibly-wonderful-happens">
            <b>Something wonderfully incredible happens (Frank Oppenheimer)</b>
          </a>
        </li>
        <li>
          <a href="https://www.theobservereffect.org/tobi.html">
            <b>Interview with Tobi Lutke</b>
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/book/show/6828896-delivering-happiness">
            Delivering Happiness (Tony Hsieh)
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/book/show/51151761-the-nolan-variations">
            <b>The Nolan Variations (Tom Shone)</b>
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/book/show/7144.Crime_and_Punishment">
            Crime and Punishment (Fyodor Dostoyevsky)
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/book/show/54505323-invent-and-wander">
            Invent and Wander (Jeff Bezos)
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/book/show/41793.Hackers_Painters">
            Hackers and Painters (Paul Graham)
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/book/show/23281639-the-upside-of-stress">
            <b>The Upside of Stress (Kelly McGonigal)</b>
          </a>
        </li>
        <li>
          <a href="https://www.tesla.com/blog/secret-tesla-motors-master-plan-just-between-you-and-me">
            Tesla's Secret Master Plan
          </a>{" "}
          /{" "}
          <a href="https://www.tesla.com/blog/master-plan-part-deux">
            (Part 2)
          </a>
        </li>
        <li>
          <a href="http://www.aaronsw.com/weblog/2taste">
            Two Conceptions of Taste (Aaron Swartz)
          </a>
        </li>
        <li>
          <a href="http://paulgraham.com/worked.html">
            What I worked on (Paul Graham)
          </a>
        </li>
        <li>
          <a href="https://wired.com/story/lee-holloway-devastating-decline-brilliant-young-coder/">
            <b>What Happened to Lee Holloway</b>
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/book/show/144409.From_Third_World_to_First">
            <b>From Third World to First (Lee Kuan Yew)</b>
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/book/show/33313.Kitchen_Confidential">
            <b>Kitchen Confidential (Anthony Bourdain)</b>
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/book/show/28921.The_Remains_of_the_Day">
            <b>The Remains of the Day (Kazuo Ishiguro)</b>
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/book/show/967775.How_to_Read_the_Bible">
            How to read the Bible (James Kugel)
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/book/show/10379147-lee-kuan-yew">
            Lee Kuan Yew: Hard Truths To Keep Singapore Going
          </a>
        </li>
        <li>
          <a href="https://simonsarris.substack.com/p/familiarity-and-belonging">
            Familiarity and Belonging (Simon Sarris)
          </a>
        </li>
        <li>
          <a href="https://simonsarris.substack.com/p/where-to-live">
            Where to Live (Simon Sarris)
          </a>
        </li>
        <li>
          <a href="https://moxie.org/stories.html">
            Stories of Life (Moxie Marlinspike)
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/book/show/629.Zen_and_the_Art_of_Motorcycle_Maintenance">
            Zen and the Art of Motorcycle Maintenance
          </a>
        </li>
        <li>
          <a href="https://www.goodreads.com/book/show/18774964-a-man-called-ove">
            A Man Called Ove
          </a>
        </li>
        <li>
          <a href="http://www.aaronsw.com/weblog/dweck">
            Believe you can change (Aaron Swartz)
          </a>
        </li>
      </ul>
      <p>
        <strong>Talks</strong>
      </p>
      <ul>
        <li>
          <a href="https://tim.blog/2016/10/27/david-heinemeier-hansson/">
            David Heinemeier Hansson
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=3qHkcs3kG44">
            Naval Ravikant
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=efs3QRr8LWw">
            Edward Snowden
          </a>
        </li>
        <li>
          <a href="https://www.perell.com/podcast/jason-fried">Jason Fried</a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=ji5_MqicxSo">Randy Pausch</a>
        </li>
      </ul>
      <p>
        <strong>Artists</strong>
      </p>
      <p>People I admire. </p>
      <p>
        From cinematic directors to musical composers and basketball players.
      </p>
      <hr style={{ width: 30, margin: "24px 0px" }} />
      <ul>
        <li>Edward Yang</li>
        <li>Wong Kar-wai</li>
        <li>Ryuichi Sakamoto</li>
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
        <li>Max Richter</li>
        <li>Daniel Day-Lewis</li>
        <li>Kazuo Ishiguro</li>
        <li>Laura Berger</li>
        <li>Paul Graham</li>
        <li>Jamal Crawford</li>
        <li>Jake Gyllenhaal</li>
        <li>Beach House</li>
      </ul>
      <p>
        <strong>Film</strong>
      </p>
      <p>Some films that come to mind (a very non-exhaustive list).</p>
      <ul>
        <li>Tampopo (1985)</li>
        <li>Cure (1997)</li>
        <li>Taipei Story (1985)</li>
        <li>Yi Yi (2000)</li>
        <li>Oppenheimer (2023)</li>
        <li>In the Mood for Love (2000)</li>
        <li>Chungking Express (1994)</li>
        <li>Edge of Tomorrow (2014)</li>
        <li>The Godfather (1972)</li>
        <li>Inception (2010)</li>
        <li>Shawshank Redemption (1994)</li>
        <li>Gone Girl (2014)</li>
        <li>Totoro (1988)</li>
        <li>Porco Rosso (1992)</li>
        <li>The Dark Knight (2008)</li>
        <li>Dune (2021)</li>
        <li>Dune 2 (2024)</li>
        <li>Children of Men (2006)</li>
      </ul>
    </Layout>
  )
}

export const query = graphql`
  {
    YiYi: file(relativePath: { eq: "yi-yi.jpeg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`

export default Books
