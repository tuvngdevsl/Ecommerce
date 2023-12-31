import React from "react";
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import classNames from "classnames/bind";
import styles from "./ForgotPassword.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

type Props = {};

const ForgotPassword = (props: Props) => {
  return (
    <>
      <Meta title={"Forgot Password"} />
      <BreadCrumb title={"Forgot Password"} />
      <div className="forgot-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className={cx("forgot-card")}>
                <h3 className="text-center mb-3">Reset your password</h3>
                <p className="text-center mb-2 mb-3">
                  We will send you an email to reset your password
                </p>
                <form action="" className="d-flex flex-column gap-15">
                  <div className="">
                    <input
                      type="email"
                      name="email"
                      className={cx("form-custom", "form-control")}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Submit
                    </button>
                    <Link to="/login"> Cancel</Link>
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

export default ForgotPassword;
