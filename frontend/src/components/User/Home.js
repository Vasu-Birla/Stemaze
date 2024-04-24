import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../../assets/css/main.css';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Dashboard() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000 // Set the duration for AOS animations
    });

    // When the component mounts, set the opacity to 1 after a delay
    const timer = setTimeout(() => {
      setOpacity(1);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Clear the timer on component unmount

  }, []);

  useEffect(() => {
    const clientsSlider = new Swiper('.clients-slider', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 50,
        },
      },
    });
  }, []);

  return (
    <div className='home'>
        <Navbar/>
        <div>

<section id="hero" className="hero">
  <div className="container position-relative">
    <div className="row gy-5" data-aos="fade-in" style={{ opacity: opacity }}>
      <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
        <h2>Welcome to <span>Stemage</span></h2>
        <p>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
        <div className="d-flex justify-content-center justify-content-lg-start">
          <a href="#about" className="btn-get-started">Get Started</a>
          <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle" /><span>Watch Video</span></a>
        </div>
      </div>
      <div className="col-lg-6 order-1 order-lg-2">
        <img src="img/hero-img.svg" className="img-fluid" alt="true" data-aos="zoom-out" data-aos-delay={100} />
      </div>
    </div>
  </div>
  <div className="icon-boxes position-relative">
    <div className="container position-relative">
      <div className="row gy-4 mt-5">
        <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={100}>
          <div className="icon-box">
            <div className="icon"><i className="bi bi-easel" /></div>
            <h4 className="title"><a href className="stretched-link">Lorem Ipsum</a></h4>
          </div>
        </div>
        <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={200}>
          <div className="icon-box">
            <div className="icon"><i className="bi bi-gem" /></div>
            <h4 className="title"><a href className="stretched-link">Sed ut perspiciatis</a></h4>
          </div>
        </div>
        <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={300}>
          <div className="icon-box">
            <div className="icon"><i className="bi bi-geo-alt" /></div>
            <h4 className="title"><a href className="stretched-link">Magni Dolores</a></h4>
          </div>
        </div>
        <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay={500}>
          <div className="icon-box">
            <div className="icon"><i className="bi bi-command" /></div>
            <h4 className="title"><a href className="stretched-link">Nemo Enim</a></h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<main id="main">
  <section id="about" className="about">
    <div className="container" data-aos="fade-up">
      <div className="section-header">
        <h2>About Us</h2>
        <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
      </div>
      <div className="row gy-4">
        <div className="col-lg-6">
          <h3>Voluptatem dignissimos provident quasi corporis</h3>
          <img src="img/about.jpg" className="img-fluid rounded-4 mb-4" alt="true" />
          <p>Ut fugiat ut sunt quia veniam. Voluptate perferendis perspiciatis quod nisi et. Placeat debitis quia recusandae odit et consequatur voluptatem. Dignissimos pariatur consectetur fugiat voluptas ea.</p>
          <p>Temporibus nihil enim deserunt sed ea. Provident sit expedita aut cupiditate nihil vitae quo officia vel. Blanditiis eligendi possimus et in cum. Quidem eos ut sint rem veniam qui. Ut ut repellendus nobis tempore doloribus debitis explicabo similique sit. Accusantium sed ut omnis beatae neque deleniti repellendus.</p>
        </div>
        <div className="col-lg-6">
          <div className="content ps-0 ps-lg-5">
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="bi bi-check-circle-fill" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="bi bi-check-circle-fill" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="bi bi-check-circle-fill" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
            </p>
            <div className="position-relative mt-4">
              <img src="img/about-2.jpg" className="img-fluid rounded-4" alt="true" />
              <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn" aria-label="Video"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="clients" className="clients">
    <div className="container" data-aos="zoom-out">
      <div className="clients-slider swiper">
        <div className="swiper-wrapper align-items-center">
          <div className="swiper-slide"><img src="img/clients/client-1.png" className="img-fluid" alt="true" /></div>
          <div className="swiper-slide"><img src="img/clients/client-2.png" className="img-fluid" alt="true" /></div>
          <div className="swiper-slide"><img src="img/clients/client-3.png" className="img-fluid" alt="true" /></div>
          <div className="swiper-slide"><img src="img/clients/client-4.png" className="img-fluid" alt="true" /></div>
          <div className="swiper-slide"><img src="img/clients/client-5.png" className="img-fluid" alt="true" /></div>
          <div className="swiper-slide"><img src="img/clients/client-6.png" className="img-fluid" alt="true" /></div>
          <div className="swiper-slide"><img src="img/clients/client-7.png" className="img-fluid" alt="true" /></div>
          <div className="swiper-slide"><img src="img/clients/client-8.png" className="img-fluid" alt="true" /></div>
        </div>
      </div>
    </div>
  </section>{/* End Clients Section */}

{/* ======= Our Services Section ======= */}
<section id="services" className="services sections-bg">
  <div className="container" data-aos="fade-up">
    <div className="section-header">
      <h2>Our Services</h2>
      <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
    </div>
    <div className="row gy-4" data-aos="fade-up" data-aos-delay={100}>
      <div className="col-lg-4 col-md-6">
        <div className="service-item  position-relative">
          <div className="icon">
            <i className="bi bi-activity" />
          </div>
          <h3>Nesciunt Mete</h3>
          <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
          <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right" /></a>
        </div>
      </div>{/* End Service Item */}
      <div className="col-lg-4 col-md-6">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-broadcast" />
          </div>
          <h3>Eosle Commodi</h3>
          <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
          <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right" /></a>
        </div>
      </div>{/* End Service Item */}
      <div className="col-lg-4 col-md-6">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-easel" />
          </div>
          <h3>Ledo Markt</h3>
          <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
          <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right" /></a>
        </div>
      </div>{/* End Service Item */}
      <div className="col-lg-4 col-md-6">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-bounding-box-circles" />
          </div>
          <h3>Asperiores Commodit</h3>
          <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
          <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right" /></a>
        </div>
      </div>{/* End Service Item */}
      <div className="col-lg-4 col-md-6">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-calendar4-week" />
          </div>
          <h3>Velit Doloremque</h3>
          <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
          <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right" /></a>
        </div>
      </div>{/* End Service Item */}
      <div className="col-lg-4 col-md-6">
        <div className="service-item position-relative">
          <div className="icon">
            <i className="bi bi-chat-square-text" />
          </div>
          <h3>Dolori Architecto</h3>
          <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
          <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right" /></a>
        </div>
      </div>{/* End Service Item */}
    </div>
  </div>
</section>{/* End Our Services Section */}

  {/* ======= Testimonials Section ======= */}
  <section id="testimonials" className="testimonials">
    <div className="container" data-aos="fade-up">
      <div className="section-header">
        <h2>Testimonials</h2>
        <p>Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur est eveniet deleniti fignissimos eos quam</p>
      </div>
      <div className="slides-3 swiper" data-aos="fade-up" data-aos-delay={100}>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <div className="d-flex align-items-center">
                  <img src="img/testimonials/testimonials-1.jpg" className="testimonial-img flex-shrink-0" alt="img" />
                  <div>
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                    </div>
                  </div>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left" />
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i className="bi bi-quote quote-icon-right" />
                </p>
              </div>
            </div>
          </div>{/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <div className="d-flex align-items-center">
                  <img src="img/testimonials/testimonials-2.jpg" className="testimonial-img flex-shrink-0" alt="img" />
                  <div>
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                    </div>
                  </div>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left" />
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                  <i className="bi bi-quote quote-icon-right" />
                </p>
              </div>
            </div>
          </div>{/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <div className="d-flex align-items-center">
                  <img src="img/testimonials/testimonials-3.jpg" className="testimonial-img flex-shrink-0" alt="img" />
                  <div>
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                    </div>
                  </div>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left" />
                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                  <i className="bi bi-quote quote-icon-right" />
                </p>
              </div>
            </div>
          </div>{/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <div className="d-flex align-items-center">
                  <img src="img/testimonials/testimonials-4.jpg" className="testimonial-img flex-shrink-0" alt="img" />
                  <div>
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                    </div>
                  </div>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left" />
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore.
                  <i className="bi bi-quote quote-icon-right" />
                </p>
              </div>
            </div>
          </div>{/* End testimonial item */}
          <div className="swiper-slide">
            <div className="testimonial-wrap">
              <div className="testimonial-item">
                <div className="d-flex align-items-center">
                  <img src="img/testimonials/testimonials-5.jpg" className="testimonial-img flex-shrink-0" alt="img" />
                  <div>
                    <h3>John Larson</h3>
                    <h4>Entrepreneur</h4>
                    <div className="stars">
                      <i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" /><i className="bi bi-star-fill" />
                    </div>
                  </div>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left" />
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore.
                  <i className="bi bi-quote quote-icon-right" />
                </p>
              </div>
            </div>
          </div>{/* End testimonial item */}
        </div>
        <div className="swiper-pagination" />
      </div>
    </div>
    <div className="counts container aos-init aos-animate" data-aos="fade-up">
      <div className="row gy-4">
        <div className="col-lg-3 col-md-6">
          <div className="count-box">
            <i className="bi bi-emoji-smile" />
            <div>
              <span data-purecounter-start={0} data-purecounter-end={232} data-purecounter-duration={0} className="purecounter">232</span>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="count-box">
            <i className="bi bi-journal-richtext" style={{color: '#ee6c20'}} />
            <div>
              <span data-purecounter-start={0} data-purecounter-end={521} data-purecounter-duration={0} className="purecounter">521</span>
              <p>Projects</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="count-box">
            <i className="bi bi-headset" style={{color: '#15be56'}} />
            <div>
              <span data-purecounter-start={0} data-purecounter-end={1463} data-purecounter-duration={0} className="purecounter">1463</span>
              <p>Hours Of Support</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="count-box">
            <i className="bi bi-people" style={{color: '#bb0852'}} />
            <div>
              <span data-purecounter-start={0} data-purecounter-end={15} data-purecounter-duration={0} className="purecounter">15</span>
              <p>Hard Workers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/* End Testimonials Section */}
  {/* ======= Our Team Section ======= */}
  <section id="team" className="team">
    <div className="container" data-aos="fade-up">
      <div className="section-header">
        <h2>Our Team</h2>
        <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum</p>
      </div>
      <div className="row gy-4">
        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={100}>
          <div className="member">
            <img src="img/team/team-1.jpg" className="img-fluid" alt="img" />
            <h4>Walter White</h4>
            <span>Web Development</span>
            <div className="social">
              <a href><i className="bi bi-twitter" /></a>
              <a href><i className="bi bi-facebook" /></a>
              <a href><i className="bi bi-instagram" /></a>
              <a href><i className="bi bi-linkedin" /></a>
            </div>
          </div>
        </div>{/* End Team Member */}
        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={200}>
          <div className="member">
            <img src="img/team/team-2.jpg" className="img-fluid" alt="img" />
            <h4>Sarah Jhinson</h4>
            <span>Marketing</span>
            <div className="social">
              <a href><i className="bi bi-twitter" /></a>
              <a href><i className="bi bi-facebook" /></a>
              <a href><i className="bi bi-instagram" /></a>
              <a href><i className="bi bi-linkedin" /></a>
            </div>
          </div>
        </div>{/* End Team Member */}
        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={300}>
          <div className="member">
            <img src="img/team/team-3.jpg" className="img-fluid" alt />
            <h4>William Anderson</h4>
            <span>Content</span>
            <div className="social">
              <a href><i className="bi bi-twitter" /></a>
              <a href><i className="bi bi-facebook" /></a>
              <a href><i className="bi bi-instagram" /></a>
              <a href><i className="bi bi-linkedin" /></a>
            </div>
          </div>
        </div>{/* End Team Member */}
        <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay={400}>
          <div className="member">
            <img src="img/team/team-4.jpg" className="img-fluid" alt />
            <h4>Amanda Jepson</h4>
            <span>Accountant</span>
            <div className="social">
              <a href><i className="bi bi-twitter" /></a>
              <a href><i className="bi bi-facebook" /></a>
              <a href><i className="bi bi-instagram" /></a>
              <a href><i className="bi bi-linkedin" /></a>
            </div>
          </div>
        </div>{/* End Team Member */}
      </div>
    </div>
  </section>{/* End Our Team Section */}
  {/* ======= Recent Blog Posts Section ======= */}
  <section id="recent-posts" className="recent-posts sections-bg">
    <div className="container" data-aos="fade-up">
      <div className="section-header">
        <h2>Recent Blog</h2>
        <p>Consequatur libero assumenda est voluptatem est quidem illum et officia imilique qui vel architecto accusamus fugit aut qui distinctio</p>
      </div>
      <div className="row gy-4">
        <div className="col-xl-4 col-md-6">
          <article>
            <div className="post-img">
              <img src="img/blog/blog-1.jpg" alt="img" className="img-fluid" />
            </div>
            <p className="post-category">Politics</p>
            <h2 className="title">
              <a href="blog-details.html">Dolorum optio tempore voluptas dignissimos</a>
            </h2>
            <div className="d-flex align-items-center">
              <img src="img/blog/blog-author.jpg" alt="img" className="img-fluid post-author-img flex-shrink-0" />
              <div className="post-meta">
                <p className="post-author">Maria Doe</p>
                <p className="post-date">
                  <time dateTime="2022-01-01">Jan 1, 2022</time>
                </p>
              </div>
            </div>
          </article>
        </div>{/* End post list item */}
        <div className="col-xl-4 col-md-6">
          <article>
            <div className="post-img">
              <img src="img/blog/blog-2.jpg" alt="img" className="img-fluid" />
            </div>
            <p className="post-category">Sports</p>
            <h2 className="title">
              <a href="blog-details.html">Nisi magni odit consequatur autem nulla dolorem</a>
            </h2>
            <div className="d-flex align-items-center">
              <img src="img/blog/blog-author-2.jpg" alt="img" className="img-fluid post-author-img flex-shrink-0" />
              <div className="post-meta">
                <p className="post-author">Allisa Mayer</p>
                <p className="post-date">
                  <time dateTime="2022-01-01">Jun 5, 2022</time>
                </p>
              </div>
            </div>
          </article>
        </div>{/* End post list item */}
        <div className="col-xl-4 col-md-6">
          <article>
            <div className="post-img">
              <img src="img/blog/blog-3.jpg" alt="img" className="img-fluid" />
            </div>
            <p className="post-category">Entertainment</p>
            <h2 className="title">
              <a href="blog-details.html">Possimus soluta ut id suscipit ea ut in quo quia et soluta</a>
            </h2>
            <div className="d-flex align-items-center">
              <img src="img/blog/blog-author-3.jpg" alt="img" className="img-fluid post-author-img flex-shrink-0" />
              <div className="post-meta">
                <p className="post-author">Mark Dower</p>
                <p className="post-date">
                  <time dateTime="2022-01-01">Jun 22, 2022</time>
                </p>
              </div>
            </div>
          </article>
        </div>{/* End post list item */}
      </div>{/* End recent posts list */}
    </div>
  </section>{/* End Recent Blog Posts Section */}

{/* ======= Contact Section ======= */}
<section id="contact" className="contact">
  <div className="container" data-aos="fade-up">
    <div className="section-header">
      <h2>Contact</h2>
      <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum</p>
    </div>
    <div className="row gx-lg-0 gy-4">
      <div className="col-lg-4">
        <div className="info-container d-flex flex-column align-items-center justify-content-center">
          <div className="info-item d-flex">
            <i className="bi bi-geo-alt flex-shrink-0" />
            <div>
              <h4>Location:</h4>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
          </div>{/* End Info Item */}
          <div className="info-item d-flex">
            <i className="bi bi-envelope flex-shrink-0" />
            <div>
              <h4>Email:</h4>
              <p>info@stemaze.com</p>
            </div>
          </div>{/* End Info Item */}
          <div className="info-item d-flex">
            <i className="bi bi-phone flex-shrink-0" />
            <div>
              <h4>Call:</h4>
              <p>+1 900-900-1001</p>
            </div>
          </div>{/* End Info Item */}
          <div className="info-item d-flex">
            <i className="bi bi-clock flex-shrink-0" />
            <div>
              <h4>Open Hours:</h4>
              <p>Mon-Sun: 11AM - 23PM</p>
            </div>
          </div>{/* End Info Item */}
        </div>
      </div>
      <div className="col-lg-8">
        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
          <div className="row">
            <div className="col-md-6 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
            </div>
          </div>
          <div className="form-group mt-3">
            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
          </div>
          <div className="form-group mt-3">
            <textarea className="form-control" name="message" rows={7} placeholder="Message" required defaultValue={""} />
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message" />
            <div className="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Send Message</button></div>
        </form>
      </div>{/* End Contact Form */}
    </div>
  </div>
</section>{/* End Contact Section */}

</main>

</div>
        <Footer/>
    </div>
  )
}

export default Dashboard