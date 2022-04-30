import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const CtaOne = () => {
  return (
    <section className="border-top pt-110 pb-150">
      <Container>
        <Row className="justify-content-center">
          <Col md={12} lg={10}>
            <div className="download-app-inner text-center">
              <h2 className="h1">
                Artıq aplikasyamızıi Playstore &<br />
                Appstore dan endirə bilərsiniz.
              </h2>
              <h3>
                elə indi yüklə
              </h3>
              <a href="#" className="btn">
                App yüklə
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CtaOne;
