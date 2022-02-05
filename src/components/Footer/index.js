import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './assets/css/style.css'

const Footer = () => {
  return (
    <div className='footer bg-dark text-light p-3'>
      <Container >
        <Col>
          <Row className='justify-content-between'>
            <Col>
              <div className="me-auto">
                <div>
                  <a href='mailto:funguy@fun.com'>
                    funguy@fun.com
                  </a>
                </div>
              </div>
            </Col>
            <Col>
              <div className="me-auto">
                <div>
                  <a href='https://github.com'>
                    GitHub
                  </a>
                </div>
              </div>
            </Col>
            <Col>
              <div className="me-auto">
                <div>
                  <a href='https://linkedin.com'>
                    LinkedIn
                  </a>
                </div>
              </div>
            </Col>
            <Col>
              <div className="me-auto">
                <div>
                  <a href='tel:555-555-5555'>
                    555-555-5555
                  </a>
                </div>
              </div>
            </Col>

          </Row>
        </Col>
      </Container>
    </div>
  )
};

export default Footer;