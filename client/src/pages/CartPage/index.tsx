import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

const cx = classNames.bind(styles);

type Props = {};

const CartPage = (props: Props) => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title={"Cart"} />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div
              className={cx(
                "cart-header",
                "d-flex py-3 justify-content-between align-items-center"
              )}
            >
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            <div
              className={cx(
                "cart-data",
                "d-flex py-3 mb-2 justify-content-between align-items-center"
              )}
            >
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img src="/images/watch.jpg" alt="product_image" className="img-fluid" />
                </div>
                <div className="w-75">
                  <p>Apple AirPods Max 2020 with Smart Case – Blue</p>
                  <p>Size: M</p>
                  <p>Color: #E33935</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">$ 100</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input type="number" className="form-control" name="" id="" min={1} max={10} />
                </div>
                <div>
                  <AiFillDelete className="text-danger" />
                </div>
              </div>
              <div className="cart-col-4">Total</div>
            </div>
          </div>
          <div className="col-12 py-2">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button">
                Continue Shopping
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h4>Subtotal: $1000</h4>
                <p>Taxes and shipping calculated at checkout</p>
                <Link className="button" to="/checkout">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CartPage;
