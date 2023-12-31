import classNames from "classnames/bind";
import styles from "./OurStore.module.scss";
import BreadCrumb from "../../components/BreadCrumb";
import Meta from "../../components/Meta";
import Reactstarts from "react-stars";
import { useState } from "react";
import ProductCard from "../../components/ProductCard";
const cx = classNames.bind(styles);
type Props = {};

const OurStore = (props: Props) => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title="Our Store" />
      <BreadCrumb title="Our Store Page" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className={cx("filter-card", "mb-3")}>
                <h3 className={cx("filter-title")}>Shop by Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className={cx("filter-card", "mb-3")}>
                <h3 className={cx("filter-title")}>Filter By</h3>
                <div>
                  <h5 className={cx("sub-title")}>Availabity</h5>
                  <div>
                    <div className={cx("form-check")}>
                      <input className={cx("form-check-input")} type="checkbox" value="" id="" />
                      <label className={cx("form-check-label")}> In stock (1) </label>
                    </div>
                    <div className={cx("form-check")}>
                      <input className={cx("form-check-input")} type="checkbox" value="" id="" />
                      <label className={cx("form-check-label")}> Out of stock (0)</label>
                    </div>
                  </div>
                  <h5 className={cx("sub-title")}>Price</h5>
                  <div className={cx("d-flex align-items-center", "gap-10")}>
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="From"
                      />
                    </div>
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="To"
                      />
                    </div>
                  </div>
                  <h5 className={cx("sub-title")}>Colors</h5>
                  <div>
                    <div className="d-flex flex-wrap">
                      <ul className={cx("colors", "ps-0")}>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                  <h5 className={cx("sub-title")}>Sizes</h5>
                  <div className={cx("form-check")}>
                    <input
                      className={cx("form-check-input")}
                      type="checkbox"
                      value=""
                      id="color-1"
                    />
                    <label className={cx("form-check-label")} htmlFor="color-1">
                      S (2)
                    </label>
                  </div>
                  <div className={cx("form-check")}>
                    <input
                      className={cx("form-check-input")}
                      type="checkbox"
                      value=""
                      id="color-2"
                    />
                    <label className={cx("form-check-label")} htmlFor="color-2">
                      S (2)
                    </label>
                  </div>
                </div>
              </div>
              <div className={cx("filter-card", "mb-3")}>
                <h3 className={cx("fiter-title")}>Product Tags</h3>
                <div>
                  <div className={cx("product-tags", "d-flex flex-wrap align-items-center gap-10")}>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Headphone
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Laptop
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Mobile
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      PC Gaming
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Wire</span>
                  </div>
                </div>
              </div>
              <div className={cx("filter-card", "mb-3")}>
                <h3 className={cx("fiter-title")}>Random Product</h3>
                <div>
                  <div className={cx("random-products", "d-flex mb-3")}>
                    <div className="w-50">
                      <img src="images/watch.jpg" className="img-fluid" alt="watch" />
                    </div>
                    <div className="w-50">
                      <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                      <Reactstarts value={4} size={24} count={5} activeColor="#ffd700" />
                      <b>$ 500</b>
                    </div>
                  </div>
                  <div className={cx("random-products", "d-flex")}>
                    <div className="w-50">
                      <img src="images/watch.jpg" className="img-fluid" alt="watch" />
                    </div>
                    <div className="w-50">
                      <h5>Kids headphones bulk 10 pack multi colored for students</h5>
                      <Reactstarts value={4} size={24} count={5} activeColor="#ffd700" />
                      <b>$ 500</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className={cx("filter-sort-grid", "mb-4")}>
                <div className="d-flex justify-content-between align-items-center">
                  <div className={cx("d-flex align-items-center", "gap-10")}>
                    <p className={cx("mb-0 d-block", "sort")}>Sort By:</p>
                    <select name="" id="" className={cx("form-control form-select")}>
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected={true}>
                        Best selling
                      </option>
                      <option value="title-ascending">Alphabetically, A-Z</option>
                      <option value="title-descending">Alphabetically, Z-A</option>
                      <option value="price-ascending">Price, low to high</option>
                      <option value="price-descending">Price, high to low</option>
                      <option value="created-ascending">Date, old to new</option>
                      <option value="created-descending">Date, new to old</option>
                    </select>
                  </div>
                  <div className={cx("d-flex align-items-center", "gap-10", "grid")}>
                    <p className="totalproducts mb-0">21 Products</p>
                    <div className={cx("d-flex align-items-center", "gap-10")}>
                      <img
                        src="images/gr4.svg"
                        className="d-block img-fluid"
                        alt="grid"
                        onClick={() => setGrid(3)}
                      />
                      <img
                        src="images/gr3.svg"
                        className="d-block img-fluid"
                        alt="grid"
                        onClick={() => setGrid(4)}
                      />
                      <img
                        src="images/gr2.svg"
                        className="d-block img-fluid"
                        alt="grid"
                        onClick={() => setGrid(6)}
                      />
                      <img
                        src="images/gr.svg"
                        className="d-block img-fluid"
                        alt="grid"
                        onClick={() => setGrid(12)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className={cx("d-flex flex-wrap", "gap-10")}>
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
