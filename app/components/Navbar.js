// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" href="/">
          My Website
        </Link>
      
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/setCookies">
                SET Cookies
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/readCookies">
                Read Cookies
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Redirect">
              Redirect TO Read Cookies
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/headmodify">
              Head Modify
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/AbtPage">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                Contact
              </Link>
            </li>
            
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
