import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../../components/BlogCard";
import ProductCard from "../../components/ProductCard";
import SpecialProduct from "../../components/SpecialProduct";
import Container from "../../components/Container";
import services from "../../utils/Data";

const cx = classNames.bind(styles);

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <Container class1={cx("home-wrapper-1", "py-5")}>
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src="images/main-banner-1.jpg"
                alt="Banner"
                className={cx("img-fluid rounded-3", "img-banner")}
              />
              <div className={cx("main-banner-content", "position-absolute")}>
                <h4>SUPERCHARGED FOR PROS</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $222.00 or %24.82/mo.</p>
                <Link className={cx("button")} to="">
                  BUY NOW
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
                  <h4>Best Sale</h4>
                  <h5>Laptops Max</h5>
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
                  <h4>New Arrival</h4>
                  <h5>Buy Ipad Air</h5>
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
                  <h4>15% Off</h4>
                  <h5>Smartwatch</h5>
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
                  <h4>Free Engraving</h4>
                  <h5>AirPods Max</h5>
                  <p>
                    From $222.00 or <br /> %24.82/mo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1={cx("home-wrapper-2", "py-5")}>
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((service, i) => {
                return (
                  <div className={cx("d-flex align-items-center", "gap-15")}>
                    <img src={service.image} alt="services" />
                    <div>
                      <h5>{service.title}</h5>
                      <p className="mb-0 fs-5">{service.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
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
      </Container>

      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className={cx("section-heading")}>Featured Collection</div>
          </div>
          <ProductCard grid={1} />
          <ProductCard grid={1} />
          <ProductCard grid={1} />
          <ProductCard grid={1} />
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className={cx("famous-card", "position-relative")}>
              <img src="images/subbanner-01.webp" className="img-fluid" alt="famous" />
              <div className={cx("famous-content", "position-absolute")}>
                <h5 className="text-white">Big screen</h5>
                <h6 className="text-white">Smart Watch Series 7</h6>
                <p className="text-white">From $399 or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className={cx("famous-card", "position-relative")}>
              <img src="images/subbanner-02.webp" alt="famous" className="img-fluid" />
              <div className={cx("famous-content", "position-absolute")}>
                <h5 className="text-dark">Studio Display</h5>
                <h6 className="text-dark">600 Hits of brigthness</h6>
                <p className="text-dark">24-inch 5k Retina display </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className={cx("famous-card", "position-relative")}>
              <img src="images/subbanner-03.webp" alt="famous" className="img-fluid" />
              <div className={cx("famous-content", "position-absolute")}>
                <h5 className="text-dark">Home Speaker</h5>
                <h6 className="text-dark">Room-filling sound</h6>
                <p className="text-dark">24-inch 5k Retina display </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className={cx("famous-card", "position-relative")}>
              <img src="images/subbanner-04.webp" alt="famous" className="img-fluid" />
              <div className={cx("famous-content", "position-absolute")}>
                <h5 className="text-dark">Smart Phone</h5>
                <h6 className="text-dark">Iphone 13 Pro.</h6>
                <p className="text-dark">Now in Black. From $1999 or $41.63/mo. </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className={cx("section-heading")}>Special Products</div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className={cx("section-heading")}>Our Popular Products</div>
          </div>
          <div className="row">
            <ProductCard grid={1} />
            <ProductCard grid={1} />
            <ProductCard grid={1} />
            <ProductCard grid={1} />
          </div>
        </div>
      </Container>

      <Container class1={cx("marque-wrapper")}>
        <div className="row">
          <div className="col-12">
            <div className="marque-inner-wrapper">
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
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className={cx("section-heading")}>Our Latest Blogs</div>
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
