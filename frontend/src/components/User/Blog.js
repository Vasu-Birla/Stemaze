import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import './Blog.css';

function Blog() {
  return (
    <div className='home'>
        <Navbar/>
          <div>
            {/* ======= Breadcrumbs ======= */}
            <div className="breadcrumbs sticked-header-offset">
              <div className="page-header d-flex align-items-center" style={{backgroundImage: 'url("")'}}>
                <div className="container position-relative">
                  <div className="row d-flex justify-content-center">
                    <div className="col-lg-6 text-center">
                      <h2>Blog</h2>
                      <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>{/* End Breadcrumbs */}
            {/* ======= Blog Section ======= */}
            <section id="blog" className="blog">
              <div className="container" data-aos="fade-up">
                <div className="row gy-4 posts-list">
                  <div className="col-xl-4 col-md-6">
                    <article>
                      <div className="post-img">
                        <img src="img/blog/blog-1.jpg" alt="" className="img-fluid" />
                      </div>
                      <p className="post-category">Politics</p>
                      <h2 className="title">
                        <a href="#">Dolorum optio tempore voluptas dignissimos</a>
                      </h2>
                      <div className="d-flex align-items-center">
                        <img src="img/blog/blog-author.jpg" alt="" className="img-fluid post-author-img flex-shrink-0" />
                        <div className="post-meta">
                          <p className="post-author-list">Maria Doe</p>
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
                        <img src="img/blog/blog-2.jpg" alt="" className="img-fluid" />
                      </div>
                      <p className="post-category">Sports</p>
                      <h2 className="title">
                        <a href="#">Nisi magni odit consequatur autem nulla dolorem</a>
                      </h2>
                      <div className="d-flex align-items-center">
                        <img src="img/blog/blog-author-2.jpg" alt="" className="img-fluid post-author-img flex-shrink-0" />
                        <div className="post-meta">
                          <p className="post-author-list">Allisa Mayer</p>
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
                        <img src="img/blog/blog-3.jpg" alt="" className="img-fluid" />
                      </div>
                      <p className="post-category">Entertainment</p>
                      <h2 className="title">
                        <a href="#">Possimus soluta ut id suscipit ea ut in quo quia et soluta</a>
                      </h2>
                      <div className="d-flex align-items-center">
                        <img src="img/blog/blog-author-3.jpg" alt="" className="img-fluid post-author-img flex-shrink-0" />
                        <div className="post-meta">
                          <p className="post-author-list">Mark Dower</p>
                          <p className="post-date">
                            <time dateTime="2022-01-01">Jun 22, 2022</time>
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>{/* End post list item */}
                  <div className="col-xl-4 col-md-6">
                    <article>
                      <div className="post-img">
                        <img src="img/blog/blog-4.jpg" alt="" className="img-fluid" />
                      </div>
                      <p className="post-category">Sports</p>
                      <h2 className="title">
                        <a href="#">Non rem rerum nam cum quo minus olor distincti</a>
                      </h2>
                      <div className="d-flex align-items-center">
                        <img src="img/blog/blog-author-4.jpg" alt="" className="img-fluid post-author-img flex-shrink-0" />
                        <div className="post-meta">
                          <p className="post-author-list">Lisa Neymar</p>
                          <p className="post-date">
                            <time dateTime="2022-01-01">Jun 30, 2022</time>
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>{/* End post list item */}
                  <div className="col-xl-4 col-md-6">
                    <article>
                      <div className="post-img">
                        <img src="img/blog/blog-5.jpg" alt="" className="img-fluid" />
                      </div>
                      <p className="post-category">Politics</p>
                      <h2 className="title">
                        <a href="#">Accusamus quaerat aliquam qui debitis facilis consequatur</a>
                      </h2>
                      <div className="d-flex align-items-center">
                        <img src="img/blog/blog-author-5.jpg" alt="" className="img-fluid post-author-img flex-shrink-0" />
                        <div className="post-meta">
                          <p className="post-author-list">Denis Peterson</p>
                          <p className="post-date">
                            <time dateTime="2022-01-01">Jan 30, 2022</time>
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>{/* End post list item */}
                  <div className="col-xl-4 col-md-6">
                    <article>
                      <div className="post-img">
                        <img src="img/blog/blog-6.jpg" alt="" className="img-fluid" />
                      </div>
                      <p className="post-category">Entertainment</p>
                      <h2 className="title">
                        <a href="#">Distinctio provident quibusdam numquam aperiam aut</a>
                      </h2>
                      <div className="d-flex align-items-center">
                        <img src="img/blog/blog-author-6.jpg" alt="" className="img-fluid post-author-img flex-shrink-0" />
                        <div className="post-meta">
                          <p className="post-author-list">Mika Lendon</p>
                          <p className="post-date">
                            <time dateTime="2022-01-01">Feb 14, 2022</time>
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>{/* End post list item */}
                </div>{/* End blog posts list */}
              </div>
            </section>{/* End Blog Section */}
            {/* End #main */}
          </div>

        <Footer/>
    </div>
  )
}

export default Blog