import React from "react";
import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import classNames from "classnames/bind";
import styles from "./Register.module.scss";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Input from "../../components/Input";

const cx = classNames.bind(styles);

type Props = {};

const RegisterPage = (props: Props) => {
  return (
    <>
      <Meta title={"Register"} />
      <BreadCrumb title={"Register"} />
      <Container class1="register-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className={cx("register-card")}>
              <h3 className="text-center mb-3">Register</h3>
              <form action="" className="d-flex flex-column gap-15">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="First name"
                  classname={cx("form-custom")}
                  i_id=""
                  value=""
                  onchange={() => {}}
                  onblur={() => {}}
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Last name"
                  classname={cx("form-custom")}
                  i_id=""
                  value=""
                  onchange={() => {}}
                  onblur={() => {}}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  classname={cx("form-custom")}
                  i_id=""
                  value=""
                  onchange={() => {}}
                  onblur={() => {}}
                />

                <Input
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  classname={cx("form-custom")}
                  i_id=""
                  value=""
                  onchange={() => {}}
                  onblur={() => {}}
                />

                <Input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  classname={cx("form-custom")}
                  i_id=""
                  value=""
                  onchange={() => {}}
                  onblur={() => {}}
                />

                <Input
                  type="password"
                  placeholder="Confirm your password"
                  name="password"
                  classname={cx("form-custom")}
                  i_id=""
                  value=""
                  onchange={() => {}}
                  onblur={() => {}}
                />

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
      </Container>
    </>
  );
};

export default RegisterPage;
