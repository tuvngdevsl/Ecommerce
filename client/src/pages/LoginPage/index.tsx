import React from "react";
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title={"Login"} />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className={cx("login-card")}>
                <h3 className="text-center mb-3">Login</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div className="">
                    <input
                      type="email"
                      name="email"
                      className={cx("form-custom", "form-control")}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mt-1">
                    <input
                      type="password"
                      className={cx("form-custom", "form-control")}
                      placeholder="Enter your password"
                      name="password"
                    />
                  </div>
                  <div className="">
                    <Link to="/forgot-password"> Forgot Password?</Link>
                  </div>
                  <div className="d-flex justify-content-center gap-15 align-items-center">
                    <button type="submit" className="button border-0">
                      Login
                    </button>
                    <Link to="/register" className={cx("button border-0", "register")}>
                      Register
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
