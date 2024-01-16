import React from "react";
import classNames from "classnames/bind";
import styles from "./SpecialProduct.module.scss";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
type Props = {};

const SpecialProduct = (props: Props) => {
  return (
    <div className="col-6 mb-3">
      <div className={cx("special-product-card")}>
        <div className="d-flex justify-content-between">
          <div>
            <img src="images/watch.jpg" alt="watch" className="img-fluid" />
          </div>
          <div className={cx("special-product-content")}>
            <h5 className="brand">Halves</h5>
            <h6 className="title">Iphone 15 Promax; Mobile; Sim...</h6>
            <ReactStars count={5} size={24} color2={"#ffd700"} />
            <p className="price">
              <span className="red-p">$100</span> &nbsp; <del>$200</del>
            </p>
            <div className={cx("discount-till", " d-flex align-items-center", "gap-10")}>
              <p className="mb-2">
                <b>5days</b>
              </p>
              <div className={cx("gap-10", "d-flex align-items-center")}>
                <span className={cx("badge rounded-cirle p-3 bg-danger")}>1</span>:
                <span className={cx("badge rounded-cirle p-3 bg-danger")}>1</span>:
                <span className={cx("badge rounded-cirle p-3 bg-danger")}>1</span>
              </div>
            </div>
            <div className="prod-count my-3">
              <p>Products : 5</p>
              <div className="progress" role="progressbar">
                <div className="progress-bar" style={{ width: "25%" }}></div>
              </div>
            </div>
            <Link to="/" className={cx("button")}>
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
