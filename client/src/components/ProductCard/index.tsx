import classNames from "classnames/bind";
import styles from "./ProductCard.module.scss";
import ReactStars from "react-stars";
import { Link, useLocation } from "react-router-dom";

const cx = classNames.bind(styles);

type Props = {
  grid: number;
};

const ProductCard = (props: Props) => {
  let location = useLocation();
  return (
    <>
      <div className={`${location.pathname === "/store" ? `${cx(`gr-${props.grid}`)}` : "col-3"}`}>
        <Link to="/" className={cx("product-card", "position-relative")}>
          <div className={cx("wishlist-icon", "position-absolute")}>
            <Link to="">
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className={cx("product-image")}>
            <img src="images/watch.jpg" className="img-fluid" alt="product_image" />
            <img src="images/tab.jpg" className="img-fluid" alt="product_image" />
          </div>
          <div className={cx("product-detail")}>
            <h6 className={cx("brand")}>Havels</h6>
            <h5 className={cx("product-title")}>
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars count={5} size={24} value="3" color2={"#ffd700"} />
            <p className={cx("description")}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ea sed ut veniam, vero,
              totam consequatur reiciendis voluptatum corrupti, itaque fugiat quam porro cumque
              cupiditate! Minus rem quos repellendus quod!
            </p>
            <p className={cx("product-prices")}>$100.00</p>
            <div className={cx("action-bar", "position-absolute")}>
              <div className={cx("d-flex flex-column", "gap-15")}>
                <Link to="">
                  <img src="images/prodcompare.svg" alt="cart" />
                </Link>
                <Link to="">
                  <img src="images/view.svg" alt="view" />
                </Link>
                <Link to="">
                  <img src="images/add-cart.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className={`${location.pathname === "/store" ? `${cx(`gr-${props.grid}`)}` : "col-3"}`}>
        <Link to="/" className={cx("product-card", "position-relative")}>
          <div className={cx("wishlist-icon", "position-absolute")}>
            <Link to="">
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className={cx("product-image")}>
            <img src="images/watch.jpg" className="img-fluid" alt="product_image" />
            <img src="images/tab.jpg" className="img-fluid" alt="product_image" />
          </div>
          <div className={cx("product-detail")}>
            <h6 className={cx("brand")}>Havels</h6>
            <h5 className={cx("product-title")}>
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars count={5} size={24} value="3" color2={"#ffd700"} />
            <p className={cx("description")}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ea sed ut veniam, vero,
              totam consequatur reiciendis voluptatum corrupti, itaque fugiat quam porro cumque
              cupiditate! Minus rem quos repellendus quod!
            </p>
            <p className={cx("product-prices")}>$100.00</p>
            <div className={cx("action-bar", "position-absolute")}>
              <div className={cx("d-flex flex-column", "gap-15")}>
                <Link to="">
                  <img src="images/prodcompare.svg" alt="cart" />
                </Link>
                <Link to="">
                  <img src="images/view.svg" alt="view" />
                </Link>
                <Link to="">
                  <img src="images/add-cart.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
