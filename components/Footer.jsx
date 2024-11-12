import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";



import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <hr />
      <div className="footer-container">
        <p className='footer-item'>
          <FaLocationPin className="footer-icon" />&nbsp;
          Yamato Engineering plc, Addis Ababa,Ethiopia
        </p>
        <p className='footer-item'>
          <FaPhoneAlt className="footer-icon" />&nbsp;
          0911-11-11-11
        </p>
        <p className='footer-item'>
          <Link className="footer-link" href={`https://www.facebook.com`}>
            <FaFacebook className="footer-icon" />
          </Link>
          <Link className="footer-link" href={`https://www.twitter.com`}>
            <FaXTwitter className="footer-icon" />
          </Link>
          <Link className="footer-link" href={`https://www.linkedin.com`}>
            <FaLinkedin className="footer-icon" />
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer