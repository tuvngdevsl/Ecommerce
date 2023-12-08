import classnames from "classnames/bind";
import style from "./header.module.scss";
import logo from "../../../assets/image/logo.jpg";
import { Button, Col, Container, Row } from "reactstrap";

const cx = classnames.bind(style);

type Props = {};

const HeaderComponent = (props: Props) => {
  return (
    <header className="header fixed-mobile-header">
      <div className="header-info">
        <Container>
          <Row>
            <Col md="4" className="text-center d-none d-md-block">
              <i className="fa fa-truck"> </i>
              <span>Free-Shipping</span>
            </Col>
            <Col md="4" className="text-center d-none d-md-block">
              <i className="fa fa-credit-card"> </i>
              <span>Payment method</span>
            </Col>
            <Col md="4" className="text-center d-none d-md-block">
              <i className="fa fa-phone"> </i>
              <span>Call us 0865607681</span>
            </Col>
            <Col xs="12" className="text-center d-none d-md-block">
              <i className="fa fa-phone"> </i>
              <span>Need advice? Call us 0865607681</span>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default HeaderComponent;
