import { Link } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>
        2024 TechSphere. <span>&#169;</span> All rights reserved.
      </p>
      <nav>
        <ul>
          <Link to='/'>Home</Link>
          <Link to='/about'>About Us</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/privacy-policy'>Privacy Policy</Link>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
