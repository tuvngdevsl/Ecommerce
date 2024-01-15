import React from "react";
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Input from "../../components/Input";

const cx = classNames.bind(styles);

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title={"Login"} />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className={cx("login-card")}>
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex flex-column gap-15">
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  classname={cx("form-custom")}
                />
                <Input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  classname={cx("form-custom")}
                />

                <div className="">
                  <Link to="/forgot-password"> Forgot Password?</Link>
                </div>
                <div className="d-flex justify-content-center gap-15 align-items-center">
                  <Link to="/admin" type="submit" className="button border-0 text-white">
                    Login
                  </Link>
                  <Link to="/register" className={cx("button border-0", "register")}>
                    Register
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default LoginPage;
