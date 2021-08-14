/* eslint-disable react/no-array-index-key, react/no-danger */
import { withWidth } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import {
  FaArrowRight,
  FaPhone,
  FaQuoteLeft,
  FaQuoteRight,
} from 'react-icons/fa';
import { IoMdMailUnread } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { scroller } from 'react-scroll';
import Ticker from 'react-ticker';
import {
  Button,
  Card,
  CardBody,
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  Col,
  Container,
  Row,
} from 'reactstrap';
import GlideComponent from '../components/carousel/GlideComponent';
import { Colxx } from '../components/common/CustomBootstrap';
import MapBlock from '../fotan/components/MapBlock';
import { branchCards } from '../fotan/data/branchHandles';
import cardList from '../fotan/data/cardItems';
import footerMenuList from '../fotan/data/footerMenuList';

const chairPerson = '/assets/img/fotan/chairperson.jpeg';
const footerLogo = '/assets/img/fotan/footer-logo.png';

const items = [
  {
    src: 'assets/img/fotan/slides/slide-1.jpg',
    altText: '',
    caption: '',
  },
  {
    src: 'assets/img/fotan/slides/slide-2.jpg',
    altText: '',
    caption: '',
  },
  {
    src: 'assets/img/fotan/slides/slide-3.jpg',
    altText: '',
    caption: '',
  },
];

const NoControlCarouselItem = ({ title, img, detail }) => {
  return (
    <div className="glide-item">
      <Card>
        <div className="position-relative">
          <img className="card-img-top" src={img} alt={title} />
        </div>
        <CardBody style={{ textAlign: 'center' }}>
          <h3>{title}</h3>
          <p
            dir="rtl"
            className=" text-small mb-0 font-weight-light"
            style={{ height: '200px' }}
          >
            {detail}
          </p>
          {title.includes('Apply') ? (
            <Button color="primary" className="mb-2">
              Apply Now
            </Button>
          ) : (
            <Button outline color="primary" className="mb-2">
              Read More
            </Button>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

const BranchCard = ({ title, img, detail, email }) => {
  return (
    <div className="glide-item">
      <Card>
        <div className="position-relative">
          <img height="200px" className="card-img-top" src={img} alt={title} />
        </div>
        <CardBody style={{ textAlign: 'center', height: '250px' }}>
          {title.includes('Dehla') ? (
            <>
              <h3>{title.split('\n')[0]}</h3>
              <h3>{title.split('\n')[1]}</h3>
            </>
          ) : (
            <h3>{title}</h3>
          )}
          <p
            className=" text-small mb-0 font-weight-light"
            style={{ height: '30px' }}
          >
            <FaPhone /> {detail.slice(0, 3)}-{detail.slice(3)}
          </p>
          <p
            className=" text-small mb-0 font-weight-light"
            style={{ height: '50px' }}
          >
            <IoMdMailUnread /> {email}
          </p>
          <Button>
            Visit Site
            <FaArrowRight style={{ marginLeft: '5px' }} />
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

const Home = (props) => {
  const [move, setMove] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const refRowHome = useRef(null);
  const refSectionFooter = useRef(null);

  const { width } = props;

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

  const slides = items.map((item, index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
      >
        <img src={item.src} alt={item.altText} width="100%" />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  const stopMove = () => {
    setMove(false);
  };
  const startMove = () => {
    setMove(true);
  };

  const getMessageFontSize = (screen) => {
    let height;
    switch (`${screen}`) {
      case 'xl':
        height = 35;
        break;
      case 'lg':
        height = 30;
        break;
      case 'md':
        height = 25;
        break;
      case 'sm':
        height = 20;
        break;
      case 'xs':
        height = 15;
        break;
      default:
        height = 15;
    }
    return height;
  };

  const onWindowResize = (event) => {
    const homeRect = refRowHome.current.getBoundingClientRect();

    const footerSection = refSectionFooter.current;
    footerSection.style.backgroundPositionX = `${
      event.target.innerWidth - homeRect.x - 2000
    }px`;
  };

  useEffect(() => {
    window.addEventListener('resize', onWindowResize);

    document.body.classList.add('no-footer');
    return () => {
      window.removeEventListener('resize', onWindowResize);
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

  return (
    <div className="landing-page">
      <div className="main-container">
        {/* Image slider */}
        <div className="content-container" id="home" ref={refRowHome}>
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
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

          <div style={{ marginTop: '1rem' }} />

          <div className="row">
            <div
              className="col-12 offset-0 col-lg-8 offset-lg-2 text-center"
              style={{ marginTop: '0' }}
            >
              <h1>News & Updates</h1>
            </div>
          </div>
          <div
            style={{
              width: '100%',
              backgroundColor: '#a73f3f',
            }}
            onMouseEnter={stopMove}
            onMouseLeave={startMove}
          >
            <Ticker move={move}>
              {() => (
                <h3
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    alignSelf: 'center',
                    margin: 'auto',
                    padding: '5px',
                    // flexWrap: 'nowrap',
                    whiteSpace: 'nowrap',
                  }}
                >
                  School activities have been continued in campus with strict
                  SOPs for the safety of students and staff.{'  '} Teachers and
                  managment is working hard to fill the education gap as annual
                  exams are approaching.
                </h3>
              )}
            </Ticker>
          </div>

          <div className="section mb-0">
            <div className="container">
              <div className="row">
                <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1 style={{ margin: '0' }}>Message of Worthy Chairman</h1>
                </div>
              </div>

              <div style={{ marginTop: '1rem' }} />

              <div className="row feature-row">
                <Container>
                  <Row>
                    <Col xs="12" sm={{ size: 3, order: 1 }}>
                      <img
                        alt="Chairperson"
                        src={chairPerson}
                        style={{
                          borderRadius: '50%',
                          marginTop: '16px',
                          marginBottom: '16px',
                          width: '100%',
                        }}
                        className="feature-image-right feature-image-charts position-relative"
                      />
                    </Col>
                    <Col
                      xs="12"
                      sm="9"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <h5
                        style={{
                          textAlign: 'right',
                          fontSize: `${getMessageFontSize(width)}px`,
                        }}
                      >
                        <FaQuoteLeft
                          style={{
                            fontSize: `${getMessageFontSize(width) * 3}px`,
                          }}
                        />
                        بچوں کو بس اللہ کا تعارف کروا دیجیے، دنیا کی مادی دوڑ سے
                        بچا کر حقیقی خوشی سے روشناس کروانے کی کوششوں میں لگے
                        رہیے۔
                        <FaQuoteRight
                          style={{
                            fontSize: `${getMessageFontSize(width) * 3}px`,
                          }}
                        />
                      </h5>
                      <div
                        style={{
                          alignSelf: 'flex-start',
                        }}
                      >
                        <h2
                          style={{
                            margin: '0',
                            fontWeight: 'bolder',
                            fontSize: '1.8rem',
                          }}
                        >
                          - Waqas Ashraf
                        </h2>
                        <h3
                          style={{
                            fontSize: '1rem',
                          }}
                        >
                          Founder & Chairman of Fotan Central Schools
                        </h3>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>

          <div className="section background pb-1">
            <div className="container" id="layouts">
              <div className="row">
                <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  {/* <h1>title</h1>
                  <p>
                    subtitle
                  </p> */}
                </div>
              </div>
              <Row>
                <Colxx xxs="12" className="pl-0 pr-0 mb-5">
                  <GlideComponent
                    settings={{
                      gap: 5,
                      perView: 3,
                      type: 'carousel',
                      breakpoints: {
                        600: { perView: 1 },
                        1400: { perView: 2 },
                      },
                    }}
                  >
                    {cardList.map((item, index) => {
                      return (
                        <div key={index}>
                          <NoControlCarouselItem {...item} />
                        </div>
                      );
                    })}
                  </GlideComponent>
                </Colxx>
              </Row>
            </div>
          </div>

          <div
            className="section mb-0 "
            style={{
              backgroundImage: 'url(assets/img/fotan/blur-bg.jpg)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1 style={{ color: 'white' }}>ہمارا مقصد</h1>
                  <h3 style={{ color: 'white' }}>
                    فوٹان سینڑل سکول کا مقصد بچوں کی مثبت و متوازن اسلامی اقدار
                    کے مطابق تعلیم و تربیت کرنا ہے تا کہ ہمارے بچے صحیح معنوں
                    میں اقبال کے شاہین اور مرد مومن بن کر معاشرے کے لیے روشنی
                    ثابت ہوں۔ ہر جگہ جن کے چمکنے سے اجالا ہو جائے۔ اس مقصد کو
                    پورا کرنے کیلئے اسلامی اور دینی طرز پر نصاب متعین کیا گیا
                    ہے۔ دور حاضر کی جدت میں ڈھالنے کے لیے کمپیوٹر کا نصاب ہر بچے
                    کے لئے متعین کیا گیا ہے۔ ہر بچے کی نفسیات کو سمجھنے کے لیے
                    اساتذہ کے لیے خصوصی تربیت کا اہتمام کیا جاتا ہے۔ بچوں کو
                    وقتاً فوقتاًاخلاقیات پر لیکچر دیا جاتا ہے تاکہ بچوں میں مثبت
                    قدروں کی شجر کاری ہوتی رہے اور وہ آنے والے وقت میں ایک درخت
                    بن کر اسے صراط مستقیم پر رہنے میں معاون ثابت ہو۔
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="section mb-0">
            <div className="container">
              <div className="row mb-0">
                <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>Visit Campus</h1>
                  <p>You can check our branch locations from here</p>
                  <MapBlock />
                </div>
              </div>
            </div>
          </div>

          <div className="section mb-0" id="campuses">
            <div className="container">
              <div className="row">
                <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>Campuses</h1>
                </div>
                <div className="col-12">
                  <div className="text-center">
                    <GlideComponent
                      settings={{
                        gap: 5,
                        perView: 4,
                        type: 'carousel',
                        breakpoints: {
                          600: { perView: 1 },
                          960: { perView: 2 },
                          1024: { perView: 3 },
                          1400: { perView: 4 },
                        },
                      }}
                    >
                      {branchCards.map((item, index) => {
                        return (
                          <div key={index}>
                            <BranchCard {...item} />
                          </div>
                        );
                      })}
                    </GlideComponent>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section background background-no-bottom mb-0 pb-5">
            <div className="container">
              <div className="row">
                <div className="col-12 offset-0 col-lg-8 offset-lg-2 text-center">
                  <h1>Contact Us</h1>
                </div>
                <div className="col-12 offset-0 col-lg-6 offset-lg-3 newsletter-input-container">
                  <div className="text-center">
                    <Container>
                      <Row>
                        <div className="social-icons" style={{ width: '100%' }}>
                          <ul className="list-unstyled list-inline">
                            <li className="list-inline-item">
                              <NavLink to="#" location={{}}>
                                <i
                                  className="simple-icon-social-facebook"
                                  style={{
                                    fontSize: `${
                                      width === 'lg' ? '50px' : '35px'
                                    }`,
                                  }}
                                />
                              </NavLink>
                            </li>
                            <li className="list-inline-item">
                              <NavLink to="#" location={{}}>
                                <i
                                  className="simple-icon-social-twitter"
                                  style={{
                                    fontSize: `${
                                      width === 'lg' ? '50px' : '35px'
                                    }`,
                                  }}
                                />
                              </NavLink>
                            </li>
                            <li className="list-inline-item">
                              <NavLink to="#" location={{}}>
                                <i
                                  className="simple-icon-social-google"
                                  style={{
                                    fontSize: `${
                                      width === 'lg' ? '50px' : '35px'
                                    }`,
                                  }}
                                />
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </Row>
                    </Container>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Container
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div className="text-center">
              <Container>
                <Row>
                  {footerMenuList.map((item, index) => (
                    <Col key={index} xs="6" lg="12">
                      <NavLink
                        style={{
                          textDecorationLine: 'underline',
                          margin: '5px',
                          color: 'royalblue',
                        }}
                        to={item.url}
                      >
                        {item.name}
                      </NavLink>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </Container>

          <div className="section footer mb-0" ref={refSectionFooter}>
            <div className="container">
              <div className="row footer-row">
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

export default withWidth()(Home);
