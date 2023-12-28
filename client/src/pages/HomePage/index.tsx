import React from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";

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
    </>
  );
};

export default HomePage;
