import React from "react";
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

type Props = {};

const RegisterPage = (props: Props) => {
  return (
    <>
      <Meta title={"Register"} />
      <BreadCrumb title={"Register"} />
      <div className="register-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className={cx("register-card")}>
                <h3 className="text-center mb-3">Register</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div className="">
                    <input
                      type="text"
                      name="firstname"
                      className={cx("form-custom", "form-control")}
                      placeholder="First name"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name="lastname"
                      className={cx("form-custom", "form-control")}
                      placeholder="Last name"
                    />
                  </div>
                  <div className="">
                    <input
                      type="email"
                      name="email"
                      className={cx("form-custom", "form-control")}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      name="phone"
                      className={cx("form-custom", "form-control")}
                      placeholder="Phone number"
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
                  <div className="mt-1">
                    <input
                      type="password"
                      className={cx("form-custom", "form-control")}
                      placeholder="Confirm your password"
                      name="password"
                    />
                  </div>
                  <div className="">
                    <Link to="/login"> Are you have account?</Link>
                  </div>
                  <div className="d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Register
                    </button>
                    <Link to="/login" className={cx("button border-0", "register")}>
                      Login
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

export default RegisterPage;
