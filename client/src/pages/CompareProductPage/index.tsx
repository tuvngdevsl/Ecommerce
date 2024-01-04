import React from "react";
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import styles from "./CompareProduct.module.scss";
import classNames from "classnames/bind";
import Color from "../../components/Color";

const cx = classNames.bind(styles);

type Props = {};

const CompareProductPage = (props: Props) => {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title={"Compare Products"} />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className={cx("compare-product-card", "position-relative")}>
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className={cx("position-absolute img-fluid", "cross")}
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="" />
                </div>
                <div className={cx("compare-product-detail")}>
                  <h5 className={cx("title")}>Iphone 13 Promax</h5>
                  <h6 className={cx("price")}>$100</h6>
                  <div>
                    <div className={cx("product-detail")}>
                      <h5>Brand</h5>
                      <p>Havels</p>
                    </div>
                    <div className={cx("product-detail")}>
                      <h5>Type</h5>
                      <p>Watch</p>
                    </div>
                    <div className={cx("product-detail")}>
                      <h5>Availablity</h5>
                      <p>In stock </p>
                    </div>
                    <div className={cx("product-detail")}>
                      <h5>Color:</h5>
                      <Color />
                    </div>

                    <div className={cx("product-detail")}>
                      <h5>Size:</h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className={cx("compare-product-card", "position-relative")}>
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className={cx("position-absolute img-fluid", "cross")}
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="" />
                </div>
                <div className={cx("compare-product-detail")}>
                  <h5 className={cx("title")}>Iphone 13 Promax</h5>
                  <h6 className={cx("price")}>$100</h6>
                  <div>
                    <div className={cx("product-detail")}>
                      <h5>Brand</h5>
                      <p>Havels</p>
                    </div>
                    <div className={cx("product-detail")}>
                      <h5>Type</h5>
                      <p>Watch</p>
                    </div>
                    <div className={cx("product-detail")}>
                      <h5>Availablity</h5>
                      <p>In stock </p>
                    </div>
                    <div className={cx("product-detail")}>
                      <h5>Color:</h5>
                      <Color />
                    </div>

                    <div className={cx("product-detail")}>
                      <h5>Size:</h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className={cx("compare-product-card", "position-relative")}>
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className={cx("position-absolute img-fluid", "cross")}
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="" />
                </div>
                <div className={cx("compare-product-detail")}>
                  <h5 className={cx("title")}>Iphone 13 Promax</h5>
                  <h6 className={cx("price")}>$100</h6>
                  <div>
                    <div className={cx("product-detail")}>
                      <h5>Brand</h5>
                      <p>Havels</p>
                    </div>
                    <div className={cx("product-detail")}>
                      <h5>Type</h5>
                      <p>Watch</p>
                    </div>
                    <div className={cx("product-detail")}>
                      <h5>Availablity</h5>
                      <p>In stock </p>
                    </div>
                    <div className={cx("product-detail")}>
                      <h5>Color:</h5>
                      <Color />
                    </div>

                    <div className={cx("product-detail")}>
                      <h5>Size:</h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className={cx("compare-product-card", "position-relative")}>
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className={cx("position-absolute img-fluid", "cross")}
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="" />
                </div>
                <div className={cx("compare-product-detail")}>
                  <h5 className={cx("title")}>Iphone 13 Promax</h5>
                  <h6 className={cx("price")}>$100</h6>
                  <div>
                    <div className={cx("product-detail")}>
                      <h5>Brand</h5>
                      <p>Havels</p>
                    </div>
                    <div className={cx("product-detail")}>
                      <h5>Type</h5>
                      <p>Watch</p>
                    </div>
                    <div className={cx("product-detail")}>
                      <h5>Availablity</h5>
                      <p>In stock </p>
                    </div>
                    <div className={cx("product-detail")}>
                      <h5>Color:</h5>
                      <Color />
                    </div>

                    <div className={cx("product-detail")}>
                      <h5>Size:</h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProductPage;
