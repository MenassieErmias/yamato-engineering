'use client';
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import '@styles/navbar.css';


const Nav = () => {

  const [toggleNav, setToggleNav] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-header">
          <Image
            className="navbar-logo"
            height={50}
            width={50}
            src='/assets/images/alpha.png'
            alt='logo'
          />
          <h1 className="navbar-heading">
            Yamato Engineering
          </h1>
        </div>
        <div className="navbar-nav">

          <button
            onClick={() => setToggleNav(toggleNav => !toggleNav)}
            className="mobile-nav-toggle-btn">
            {
              toggleNav ?
                <IoMdClose />
                :
                <RxHamburgerMenu className='hamburger-menu-icon' />}
          </button>

          {
            toggleNav && (

              <ul className="mobile-nav-ul">
                <li
                  onClick={() => setToggleNav(false)}
                  className="mobile-nav-item">
                  <Link
                    className="mobile-nav-link"
                    href={'/'}
                  >
                    Home
                  </Link>
                </li>
                <hr />
                <li
                  onClick={() => setToggleNav(false)}
                  className="mobile-nav-item">
                  <Link
                    className="mobile-nav-link"
                    href={'/services'}
                  >
                    Services
                  </Link>
                </li>
                <hr />
                <li
                  onClick={() => setToggleNav(false)}
                  className="mobile-nav-item">
                  <Link
                    className="mobile-nav-link"
                    href={'/about-us'}
                  >
                    About Us
                  </Link>
                </li>
                <hr />
                <li
                  onClick={() => setToggleNav(false)}
                  className="mobile-nav-item">
                  <Link
                    className="mobile-nav-link"
                    href={'/contact-us'}
                  >
                    Contact Us
                  </Link>
                </li>
                <hr />
              </ul>

            )
          }

          <ul className="navbar-ul">
            <li className="nav-item">
              <Link href={'/'} className="navbar-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link href={'/services'} className="navbar-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link href={'/about-us'} className="navbar-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link href={'/contact-us'} className="navbar-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav