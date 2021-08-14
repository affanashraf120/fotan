/* eslint-disable react/no-array-index-key, react/no-danger */
import classnames from 'classnames';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from 'reactstrap';
import { scroller } from 'react-scroll';

import AdminLoginModal from './AdminLoginModal';
import AnouncementPopup from './AnouncmentPopup';
import LoginModal from './LoginModal';
import menuList from '../data/navMenuList';

const logo = '/assets/img/fotan/logo.png';

const Navbar = () => {
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [adminLogin, setAdminLogin] = useState(false);
  const [login, setLogin] = useState(false);
  const [active, setActive] = useState(true);
  const closeModal = () => {
    setActive(false);
  };

  const openAdminLogin = () => {
    setAdminLogin(true);
  };

  const closeAdminLogin = () => {
    setAdminLogin(false);
  };

  const openLogin = () => {
    setLogin(true);
  };

  const closeLogin = () => {
    setLogin(false);
  };

  const scrollTo = (event, target) => {
    event.preventDefault();
    scroller.scrollTo(target, {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -100,
    });
    return false;
  };

  return location.pathname.includes('app') ? (
    <></>
  ) : (
    <div
      className={classnames('landing-page', {
        'show-mobile-menu': showMobileMenu,
      })}
    >
      <div>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div
          className="mobile-menu"
          onClick={(event) => event.stopPropagation()}
        >
          <a
            // className="logo-mobile c-pointer"
            href="#scroll"
            onClick={(event) => scrollTo(event, 'home')}
          >
            {/* <span /> */}
            <img
              className="footer-logo"
              alt="footer logo"
              width="200px"
              src={logo}
            />
          </a>
          <ul className="navbar-nav">
            {menuList.map((item, index) => {
              return item.id !== 'campuses' ? (
                <li key={index} className="nav-item">
                  <Link className="c-pointer" to={item.url}>
                    {item.name}
                  </Link>
                </li>
              ) : (
                <li key={index} className="nav-item">
                  <a
                    className="c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'campuses')}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
            <li className="nav-item">
              <div className="separator" />
            </li>
            <li className="nav-item text-center">
              <button
                type="button"
                className="btn btn-outline-primary btn-sm mobile-menu-cta"
                onClick={openLogin}
              >
                Login
              </button>
            </li>
            <li className="nav-item text-center">
              <button
                type="button"
                className="btn btn-outline-primary btn-sm mobile-menu-cta"
                onClick={openAdminLogin}
              >
                Admin
              </button>
            </li>
          </ul>
        </div>

        {/* Modals */}
        <AdminLoginModal open={adminLogin} closeHandler={closeAdminLogin} />
        <LoginModal open={login} closeHandler={closeLogin} />
        {active && <AnouncementPopup handleClose={closeModal} />}

        {/* Navbar */}
        <div className="main-container">
          <div className="landing-page-nav">
            <nav>
              <div className="container d-flex align-items-center justify-content-between">
                <a
                  // className="navbar-logo pull-left c-pointer"
                  href="/"
                  onClick={(event) => scrollTo(event, 'home')}
                >
                  <div className="logo-img-container">
                    <img alt="logo" src={logo} />
                  </div>
                </a>
                <ul className="navbar-nav d-none d-lg-flex flex-row">
                  {menuList.map((item, index) => {
                    // href="#scroll"
                    // onClick={(event) => scrollTo(event, 'home')}
                    return item.id !== 'campuses' ? (
                      <li key={index} className="nav-item">
                        <Link className="c-pointer" to={item.url}>
                          {item.name}
                        </Link>
                      </li>
                    ) : (
                      <li key={index} className="nav-item">
                        <a
                          className="c-pointer"
                          href="#scroll"
                          onClick={(event) => scrollTo(event, 'campuses')}
                        >
                          {item.name}
                        </a>
                      </li>
                    );
                  })}
                  <li className="nav-item pl-4">
                    <Button className="btn btn-shadow" onClick={openLogin}>
                      Login
                    </Button>
                  </li>
                  <li className="nav-item pl-4">
                    <Button className="btn btn-shadow" onClick={openAdminLogin}>
                      Admin
                    </Button>
                  </li>
                </ul>
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                <span
                  className="mobile-menu-button"
                  onClick={(event) => {
                    setShowMobileMenu(!showMobileMenu);
                    event.stopPropagation();
                  }}
                >
                  <i className="simple-icon-menu" />
                </span>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
