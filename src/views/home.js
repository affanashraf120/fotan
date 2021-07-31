/* eslint-disable react/no-array-index-key, react/no-danger */
import classnames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import Headroom from 'react-headroom';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';
import {
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from 'reactstrap';
// import GlideComponent from '../components/carousel/GlideComponent';
import { buyUrl } from '../constants/defaultValues';
import LoginModal from '../fotan/components/LoginModal';
import MapBlock from '../fotan/components/MapBlock';
import menuList from '../fotan/data/navMenuList';

// const schoolPostor = '/assets/img/fotan/school.jpg';
const chairPerson = '/assets/img/fotan/chairperson.jpeg';
const footerLogo = '/assets/img/fotan/footer-logo.png';
const logo = '/assets/img/fotan/logo.png';

const items = [
  {
    src: 'https://worldschildrensprize.org/images/pakistan_top_M004555_-1.jpeg',
    altText: 'Slide 1',
    caption: 'Slide 1',
  },
  {
    src:
      'https://mcmscache.epapr.in/post_images/website_350/post_15844303/thumb.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
  },
  {
    src: 'http://www.charterhouse.edu.pk/page_images/6.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
  },
];

const Home = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [adminLogin, setAdminLogin] = useState(false);
  const refRowHome = useRef(null);
  const refSectionHome = useRef(null);
  const refSectionFooter = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} width="100%" />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  const openAdminLogin = () => {
    setAdminLogin(true);
  };

  const closeAdminLogin = () => {
    setAdminLogin(false);
  };

  const onWindowResize = (event) => {
    const homeRect = refRowHome.current.getBoundingClientRect();

    const homeSection = refSectionHome.current;
    homeSection.style.backgroundPositionX = `${homeRect.x - 580}px`;

    const footerSection = refSectionFooter.current;
    footerSection.style.backgroundPositionX = `${
      event.target.innerWidth - homeRect.x - 2000
    }px`;

    if (event.target.innerWidth >= 992) {
      setShowMobileMenu(false);
    }
  };

  const onWindowClick = () => {
    setShowMobileMenu(false);
  };

  const onWindowScroll = () => {
    setShowMobileMenu(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', onWindowScroll);
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('click', onWindowClick);

    document.body.classList.add('no-footer');
    return () => {
      window.removeEventListener('scroll', onWindowScroll);
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('click', onWindowClick);
      document.body.classList.remove('no-footer');
    };
  }, []);

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

  // const toggle = (tab) => {
  //   if (activeTab !== tab) setActiveTab(tab);
  // };

  return (
    <div
      className={classnames('landing-page', {
        'show-mobile-menu': showMobileMenu,
      })}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div className="mobile-menu" onClick={(event) => event.stopPropagation()}>
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
          {menuList.map((item, index) => (
            <li key={index} className="nav-item">
              <Link className="c-pointer" to={item.url}>
                {item.name}
              </Link>
            </li>
          ))}
          <li className="nav-item">
            <div className="separator" />
          </li>
          <li className="nav-item text-center">
            <a
              className="btn btn-outline-primary btn-sm mobile-menu-cta"
              target="_blank"
              rel="noopener noreferrer"
              href={buyUrl}
            >
              Login
            </a>
          </li>
          <li className="nav-item text-center">
            <button
              type="button"
              className="btn btn-shadow btn-md"
              onClick={openAdminLogin}
            >
              Admin
            </button>
          </li>
        </ul>
      </div>

      {/* Modals */}
      <LoginModal open={adminLogin} closeHandler={closeAdminLogin} />

      <div className="main-container">
        <Headroom className="landing-page-nav">
          <nav>
            <div className="container d-flex align-items-center justify-content-between">
              <a
                // className="navbar-logo pull-left c-pointer"
                href="/"
                onClick={(event) => scrollTo(event, 'home')}
              >
                <img
                  className="footer-logo"
                  alt="footer logo"
                  width="150px"
                  src={logo}
                />
                {/* <span className="dark">FOTAN</span> */}
              </a>
              <ul className="navbar-nav d-none d-lg-flex flex-row">
                {menuList.map((item, index) => (
                  <li key={index} className="nav-item">
                    <Link className="c-pointer" to={item.url}>
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li className="nav-item pl-4">
                  <button
                    type="button"
                    className="btn btn-outline-semi-light btn-sm pr-4 pl-4"
                    onClick={openAdminLogin}
                    // style={{ color: 'red' }}
                  >
                    Login
                  </button>
                </li>
                <li className="nav-item pl-4">
                  <button
                    type="button"
                    className="btn btn-shadow btn-md pr-4 pl-4"
                    onClick={openAdminLogin}
                    // style={{ color: 'red' }}
                  >
                    Admin
                  </button>
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
        </Headroom>

        <div className="content-container" id="home">
          <div className="section home" ref={refSectionHome}>
            <div className="container">
              <div className="row home-row" ref={refRowHome}>
                <div className="col-12">
                  <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                  >
                    <CarouselIndicators
                      items={items}
                      activeIndex={activeIndex}
                      onClickHandler={goToIndex}
                    />
                    {slides}
                    <CarouselControl
                      direction="prev"
                      directionText="Previous"
                      onClickHandler={previous}
                    />
                    <CarouselControl
                      direction="next"
                      directionText="Next"
                      onClickHandler={next}
                    />
                  </Carousel>
                </div>
              </div>
            </div>
          </div>

          <div className="section">
            <div className="container" id="features">
              <div className="row">
                <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>Message of Worthy Chairman</h1>
                  <p>Founder & Principal of Fotan Central Schools</p>
                </div>
              </div>

              <div className="row feature-row">
                <div className="col-12 col-md-6 col-lg-5 d-flex align-items-center">
                  <div className="feature-text-container">
                    <h1>Waqas Ashraf</h1>
                    <div
                      style={{ fontSize: '1.5rem' }}
                      dangerouslySetInnerHTML={{
                        __html: ` بچوں کو بس اللہ کا تعارف کروا دیجیے، دنیا کی مادی دوڑ سے
                        بچا کر حقیقی خوشی سے روشناس کروانے کی کوششوں میں لگے رہیے۔
                        <br />`,
                      }}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-6 offset-lg-1 offset-md-0 position-relative">
                  <img
                    alt="Chairperson"
                    src={chairPerson}
                    style={{ borderRadius: '50%' }}
                    width="100%"
                    className="feature-image-right feature-image-charts position-relative"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="section background">
            <div className="container" id="layouts">
              <div className="row">
                <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  {/* <h1>Location</h1>
                  <p>
                    We did our best to create layouts for various needs that
                    developers might have and best experience for users.
                    <br />
                    They are clean and slick. They function well and look good
                    at the same time.
                  </p> */}
                </div>
              </div>

              {/* <div className="row pt-5">
                {layouts.map((l, index) => (
                  <div
                    key={`layout_${index}`}
                    className="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-5"
                  >
                    <img
                      className="img-fluid border-radius depth-2 mb-3 semi-rounded"
                      alt={l.title}
                      src={l.img}
                    />
                    <h4 className="text-center">{l.title}</h4>
                  </div>
                ))}
              </div> */}
              {/* <MapBlock /> */}
            </div>
          </div>

          <div className="section mb-0">
            <div className="container" id="components">
              <div className="row mb-5">
                <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>Visit Campus</h1>
                  <p>You can check our branch locations from here</p>
                  <MapBlock />
                </div>
              </div>
            </div>
            {/* <img
              className="components-image mb-5 pb-5"
              alt="Components"
              src="/assets/img/landing-page/components.jpg"
            /> */}
          </div>

          <div className="section background background-no-bottom mb-0 pb-0">
            <div className="container">
              <div className="row">
                <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  {/* <h1>Enjoying so Far?</h1>
                  <p>
                    Purchase Gogo to get a fresh start with your new project.
                  </p> */}
                </div>
                <div className="col-12 offset-0 col-lg-6 offset-lg-3 newsletter-input-container">
                  {/* <div className="text-center mb-3">
                    <a
                      className="btn btn-secondary btn-xl"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={buyUrl}
                    >
                      BUY NOW
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="section footer mb-0" ref={refSectionFooter}>
            <div className="container">
              <div className="row footer-row">
                <div className="col-12 text-right">
                  <a
                    className="btn btn-circle btn-outline-semi-light footer-circle-button c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'home')}
                  >
                    <i className="simple-icon-arrow-up" />
                  </a>
                </div>

                <div className="col-12 text-center footer-content">
                  <a
                    className="c-pointer"
                    href="#scroll"
                    onClick={(event) => scrollTo(event, 'home')}
                  >
                    <img
                      className="footer-logo"
                      alt="footer logo"
                      src={footerLogo}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="container copyright pt-5 pb-5">
              <div className="row">
                <div className="col-12" />
                <div className="col-12 text-center">
                  <p className="mb-0">2021 © Fotanistan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
