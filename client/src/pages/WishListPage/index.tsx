import BreadCrumb from "../../components/BreadCrumb";
import Meta from "../../components/Meta";
import classNames from "classnames/bind";
import styles from "./Wishlist.module.scss";

const cx = classNames.bind(styles);

type Props = {};

const WishlistPage = (props: Props) => {
  return (
    <>
      <Meta title="Wishlist" />
      <BreadCrumb title="Wishlist" />
      <div className="wistlish-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className={cx("wishlist-card", "position-relative")}>
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className={cx("position-absolute img-fluid", "cross")}
                />
                <div className="wishlist-card-image">
                  <img src="images/watch.jpg" alt="watch" className="img-fluid w-100" />
                </div>
                <div className="py-3">
                  <h5 className={cx("title")}>Iphone 13 Promax</h5>
                  <h6 className={cx("price")}>$100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className={cx("wishlist-card", "position-relative")}>
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className={cx("position-absolute img-fluid", "cross")}
                />
                <div className="wishlist-card-image">
                  <img src="images/watch.jpg" alt="watch" className="img-fluid w-100" />
                </div>
                <div className="py-3">
                  <h5 className={cx("title")}>Iphone 13 Promax</h5>
                  <h6 className={cx("price")}>$100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className={cx("wishlist-card", "position-relative")}>
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className={cx("position-absolute img-fluid", "cross")}
                />
                <div className="wishlist-card-image">
                  <img src="images/watch.jpg" alt="watch" className="img-fluid w-100" />
                </div>
                <div className="py-3">
                  <h5 className={cx("title")}>Iphone 13 Promax</h5>
                  <h6 className={cx("price")}>$100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className={cx("wishlist-card", "position-relative")}>
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className={cx("position-absolute img-fluid", "cross")}
                />
                <div className="wishlist-card-image">
                  <img src="images/watch.jpg" alt="watch" className="img-fluid w-100" />
                </div>
                <div className="py-3">
                  <h5 className={cx("title")}>Iphone 13 Promax</h5>
                  <h6 className={cx("price")}>$100</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishlistPage;
