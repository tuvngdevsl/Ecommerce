import Meta from "../../components/Meta";
import BreadCrumb from "../../components/BreadCrumb";
import classNames from "classnames/bind";
import styles from "./ResetPassword.module.scss";
const cx = classNames.bind(styles);

type Props = {};

const ResetPassword = (props: Props) => {
  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrumb title={"Reset Password"} />
      <div className="reset-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className={cx("reset-card")}>
                <h3 className="text-center mb-3">Reset Password</h3>
                <form action="" className="d-flex flex-column gap-15">
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

                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      OK
                    </button>
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

export default ResetPassword;
