import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../../components/BlogCard";
import ProductCard from "../../components/ProductCard";
import SpecialProduct from "../../components/SpecialProduct";

const cx = classNames.bind(styles);

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src="images/main-banner-1.jpg"
                  alt="Banner"
                  className={cx("img-fluid rounded-3", "img-banner")}
                />
                <div className={cx("main-banner-content", "position-absolute")}>
                  <h4>Đồ gia dụng và nội thất</h4>
                  <h5>Ghế đẩu</h5>
                  <p>From $222.00 or %24.82/mo.</p>
                  <Link className={cx("button")} to="">
                    BUY NƠW{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div
                className={cx(
                  "d-flex flex-wrap justify-content-between align-items-center",
                  "gap-10"
                )}
              >
                <div className={cx("small-banner", "position-relative")}>
                  <img
                    src="images/catbanner-01.jpg"
                    alt="Banner"
                    className={cx("img-fluid rounded-3", "img-banner")}
                  />
                  <div className={cx("position-absolute", "small-banner-content")}>
                    <h4>Đồ gia dụng và nội thất</h4>
                    <h5>Ghế đẩu</h5>
                    <p>
                      From $222.00 or <br /> %24.82/mo.
                    </p>
                  </div>
                </div>
                <div className={cx("small-banner", "position-relative")}>
                  <img
                    src="images/catbanner-02.jpg"
                    alt="Banner"
                    className={cx("img-fluid rounded-3", "img-banner")}
                  />
                  <div className={cx("position-absolute", "small-banner-content")}>
                    <h4>Đồ gia dụng và nội thất</h4>
                    <h5>Ghế đẩu</h5>
                    <p>
                      From $222.00 or <br /> %24.82/mo.
                    </p>
                  </div>
                </div>
                <div className={cx("small-banner", "position-relative")}>
                  <img
                    src="images/catbanner-03.jpg"
                    alt="Banner"
                    className={cx("img-fluid rounded-3", "img-banner")}
                  />
                  <div className={cx("position-absolute", "small-banner-content")}>
                    <h4>Đồ gia dụng và nội thất</h4>
                    <h5>Ghế đẩu</h5>
                    <p>
                      From $222.00 or <br /> %24.82/mo.
                    </p>
                  </div>
                </div>
                <div className={cx("small-banner", "position-relative")}>
                  <img
                    src="images/catbanner-04.jpg"
                    alt="Banner"
                    className={cx("img-fluid rounded-3", "img-banner")}
                  />
                  <div className={cx("position-absolute", "small-banner-content")}>
                    <h4>Đồ gia dụng và nội thất</h4>
                    <h5>Ghế đẩu</h5>
                    <p>
                      From $222.00 or <br /> %24.82/mo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cx("home-wrapper-2", "py-5")}>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className={cx("d-flex align-items-center", "gap-15")}>
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h5>Free Shipping </h5>
                    <p className="mb-0 fs-5">From all orders over $5</p>
                  </div>
                </div>
                <div className={cx("d-flex align-items-center", "gap-15")}>
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h5>Daily Surprise Offers</h5>
                    <p className="mb-0 fs-5">Save up to 25%</p>
                  </div>
                </div>
                <div className={cx("d-flex align-items-center", "gap-15")}>
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h5>Support 24/7</h5>
                    <p className="mb-0 fs-5">Shop with an expert</p>
                  </div>
                </div>
                <div className={cx("d-flex align-items-center", "gap-15")}>
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h5>Affordable Prices</h5>
                    <p className="mb-0 fs-5">Get Factory Default Price</p>
                  </div>
                </div>
                <div className={cx("d-flex align-items-center", "gap-15")}>
                  <img src="images/service-05.png" alt="services" />
                  <div>
                    <h5>Secure Payments</h5>
                    <p className="mb-0 fs-5">100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div
                className={cx(
                  "categories",
                  "d-flex justify-content-between flex-wrap align-items-center"
                )}
              >
                <div className={cx("d-flex align-items-center", "gap")}>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p className="fs-5"> 10 items</p>
                  </div>
                  <img src="images/tv.jpg" alt="Camera" />
                </div>
                <div className={cx("d-flex align-items-center", "gap")}>
                  <div>
                    <h6>Cameras</h6>
                    <p className="fs-5">10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera" />
                </div>
                <div className={cx("d-flex align-items-center", "gap")}>
                  <div>
                    <h6>Smart TV</h6>
                    <p className="fs-5">10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera" />
                </div>
                <div className={cx("d-flex align-items-center", "gap")}>
                  <div>
                    <h6>Smart Watches</h6>
                    <p className="fs-5">10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera" />
                </div>
                <div className={cx("d-flex align-items-center", "gap")}>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p className="fs-5"> 10 items</p>
                  </div>
                  <img src="images/tv.jpg" alt="Camera" />
                </div>
                <div className={cx("d-flex align-items-center", "gap")}>
                  <div>
                    <h6>Cameras</h6>
                    <p className="fs-5">10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera" />
                </div>
                <div className={cx("d-flex align-items-center", "gap")}>
                  <div>
                    <h6>Smart TV</h6>
                    <p className="fs-5">10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera" />
                </div>
                <div className={cx("d-flex align-items-center", "gap")}>
                  <div>
                    <h6>Smart Watches</h6>
                    <p className="fs-5">10 items</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className={cx("section-heading")}>Featured Collection</div>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card bg-dark">
                <h5>Big screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399 or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className={cx("section-heading")}>Special Products</div>
            </div>
            <div className="row">
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
            </div>
          </div>
        </div>
      </section>

      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className={cx("section-heading")}>Our Popular Products</div>
            </div>
            <div className="row">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </section>

      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper ">
                <Marquee>
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brand" className={cx("brand-img")} />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brand" className={cx("brand-img")} />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand" className={cx("brand-img")} />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand" className={cx("brand-img")} />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand" className={cx("brand-img")} />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand" className={cx("brand-img")} />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand" className={cx("brand-img")} />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brand" className={cx("brand-img")} />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className={cx("section-heading")}>Our Latest Blogs</div>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
