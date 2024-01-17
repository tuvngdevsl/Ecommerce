import classNames from "classnames/bind";
import styles from "./ProductCard.module.scss";
import ReactStars from "react-stars";
import { Link, useLocation } from "react-router-dom";

const cx = classNames.bind(styles);

type Props = {
  grid: number;
};

const ProductCard = (props: Props) => {
  const location = useLocation();
  return (
    <>
      <div
        className={`${location.pathname === "/product" ? `${cx(`gr-${props.grid}`)}` : "col-3"}`}
      >
        <Link
          to={`${
            location.pathname === "/"
              ? "/product/:id"
              : location.pathname === "/product/:id"
                ? "/product/:id"
                : ":id"
          }`}
          className={cx("product-card", "position-relative")}
        >
          <div className={cx("wishlist-icon", "position-absolute")}>
            <button className="border-0 bg-transparent">
              <img src="images/wish.svg" alt="wishlist" />
            </button>
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
            <ReactStars count={5} size={24} color2={"#ffd700"} />
            <p className={cx("description")}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ea sed ut veniam, vero,
              totam consequatur reiciendis voluptatum corrupti, itaque fugiat quam porro cumque
              cupiditate! Minus rem quos repellendus quod!
            </p>
            <p className={cx("product-prices")}>$100.00</p>
            <div className={cx("action-bar", "position-absolute")}>
              <div className={cx("d-flex flex-column", "gap-15")}>
                <button className="border-0 bg-transparent">
                  <img src="images/prodcompare.svg" alt="compare" />
                </button>
                <button className="border-0 bg-transparent">
                  <img src="images/view.svg" alt="view" />
                </button>
                <button className="border-0 bg-transparent">
                  <img src="images/add-cart.svg" alt="addcart" />
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
