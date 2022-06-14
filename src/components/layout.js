import React from 'react';
import { Link } from 'gatsby';
import './layout.scss';

function Layout({ children }) {
  return (
    <div className="container">
      <div className="content">
        <header>
          <p>
            <Link className="home" to="/">Aaron Chen</Link>
            <br />
            Random access thought.
          </p>
          <div className="navigation">
            <ul>
              <li><Link to="/bookshelf">Bookshelf</Link></li>
              <li><Link to="/visuals">Visuals</Link></li>
            </ul>
          </div>
        </header>
        <hr style={{ width: '10%', minWidth: 60, margin: '24px 0px 24px 0px' }} />
        {children}
      </div>
    </div>
  )
}

export default Layout;