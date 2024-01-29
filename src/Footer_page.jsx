// // Footer.js
// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="footer-container">
//       <div className="social-media-links">
//         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-facebook"></i>
//         </a>
//         <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-twitter"></i>
//         </a>
//         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-instagram"></i>
//         </a>
//         <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//           <i className="fab fa-linkedin"></i>
//         </a>
//       </div>
//       <nav className="footer-navigation">
//         <ul>

//           <li><a href="#home">FB</a></li>
//           <li><a href="#about">About</a></li>
//           <li><a href="#services">Services</a></li>
//           <li><a href="#contact">Contact</a></li>
//         </ul>
//       </nav>
//     </footer>
//   );
// };

// export default Footer;

// Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-media-links">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <h3>@2024 all right reserved</h3>

      </div>
      <nav className="footer-navigation">

       
        {/* <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul> */}
      </nav>
    </footer>
  );
};

export default Footer;
