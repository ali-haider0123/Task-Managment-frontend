import React from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';

export default function App() {
  return (
    // Hero Section
    <section>
      <Container fluid className="text-center pt-5 pb-5">
        <Row className="justify-content-center pt-4 mb-4">
          <Col lg={8} md={10}>
            <h1 className="fw-bold display-4 mb-3 text-dark">
              Effortless task <br /> management, <span className='text-warning'>anytime</span>
            </h1>
            <p className="text-muted fs-5 mb-4 px-md-5">
              Manage tasks and projects easily with an all-in-one platform designed for seamless collaboration
            </p>
            <div className="d-flex justify-content-center gap-3 mb-5">
              <Button size="lg" className="px-4 py-2 border-0 bg-outline-primary shadow-sm">
                Request a Demo
              </Button>
              <Button variant="outline-primary" size="lg" className="px-4 py-2 border shadow-sm">
                Contact Sales
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center mt-4">
          <Col md={11} className="text-center">
            <img src='/images/home/HeroSection.png' alt=''
              className='w-100 img=fluid'
            />
          </Col>
        </Row>
      </Container>

      
    </section>
  )
}