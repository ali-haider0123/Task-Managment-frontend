import React from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import { FaShareAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsFillGridFill } from "react-icons/bs";
import { RiSettings5Fill } from "react-icons/ri";
import { FaLightbulb } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { PiListChecksFill } from "react-icons/pi";
import { IoChatbox } from "react-icons/io5";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section>
        <Container fluid className="text-center bg-light py-5">
          <Row className="justify-content-center pt-4 mb-4">
            <Col lg={8} md={10}>
              <h1 className="fw-bold display-4 pb-4 text-dark">
                Effortless task <br /> management, <span className='text-warning'>anytime</span>
              </h1>
              <p className="text-muted fs-5 pb-5 px-md-5">
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

      {/* Trusted */}

      <section>
        <Container fluid className='py-5'>
          <Row className="justify-content-center text-center ">
            <Col lg={8} md={10}>
              <p className="text-danger mb-4 px-md-5">
                We are truset by
              </p>
              <h1 className="fw-bold display-4 pb-3 text-dark">
                The smart Choice for your team
              </h1>
              <p className="text-muted mb-4 px-md-5">
                Everything you need to simplify your projects, boost productivity, and keep your team aligned
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center py-4 g-5 text-center">
            <Col xs={6} sm={4} md={2}>
              <img src="/images/home/Mailchimp.png" alt="Mailchimp logo" className="img-fluid" />
            </Col>
            <Col xs={6} sm={4} md={2}>
              <img src="/images/home/Doordash.png" alt="DoorDash logo" className="img-fluid " />
            </Col>
            <Col xs={6} sm={4} md={2}>
              <img src="/images/home/Google.png" alt="Google logo" className="img-fluid" />
            </Col>
            <Col xs={6} sm={4} md={2}>
              <img src="/images/home/Spotify.png" alt="Spotify logo" className="img-fluid" />
            </Col>
            <Col xs={6} sm={4} md={2}>
              <img src="/images/home/Webflow.png" alt="Webflow logo" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Benefits */}

      <section>
        <Container fluid className='py-5 bg-light'>
          <Row className="justify-content-center text-center ">
            <Col lg={8} md={10}>
              <p className="text-danger mb-4 px-md-5">
                Benefits
              </p>
              <h1 className="fw-bold display-4 pb-3 text-dark">
                The smart Choice for your team
              </h1>
              <p className="text-muted mb-4 px-md-5">
                Everything you need to simplify your projects, boost productivity, and keep your team aligned
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center g-4">
            {/* Card 1 */}
            <Col xs={12} md={6} lg={4}>
              <Card className="h-100 border-1 shadow-sm p-4 rounded-4">
                <Card.Body className="p-0 d-flex flex-column justify-content-between">
                  <div>
                    <div
                      className="d-flex align-items-center justify-content-center bg-light border rounded-3 mb-4"
                      style={{ width: '60px', height: '60px' }}
                    >
                      <FaShareAlt className="fs-2 text-primary" />
                    </div>
                    <Card.Title className="fw-semibold text-dark fs-4 mb-3">
                      Seamless Collaboration
                    </Card.Title>
                    <Card.Text className="text-muted fs-6 lh-base mb-4">
                      Empower your team to collaborate in real-time with easy task management
                      and transparent project tracking.
                    </Card.Text>
                  </div>

                  <div className="d-flex align-items-center text-dark fw-semibold mt-auto" style={{ cursor: 'pointer' }}>
                    <span className="me-2">Learn More &nbsp; <FaArrowRightLong /></span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Card className="h-100 border-1 shadow-sm p-4 rounded-4">
                <Card.Body className="p-0 d-flex flex-column justify-content-between">
                  <div>
                    <div
                      className="d-flex align-items-center justify-content-center bg-light border rounded-3 mb-4"
                      style={{ width: '60px', height: '60px' }}
                    >
                      <BsFillGridFill className="fs-2 text-danger" />

                    </div>
                    <Card.Title className="fw-semibold text-dark fs-4 mb-3">
                      All-in-One Solution
                    </Card.Title>
                    <Card.Text className="text-muted fs-6 lh-base mb-4">
                      Manage everything from tasks to team communication in one intuitive platform designed to boost productivity
                    </Card.Text>
                  </div>

                  <div className="d-flex align-items-center text-dark fw-semibold mt-auto" style={{ cursor: 'pointer' }}>
                    <span className="me-2">Learn More &nbsp; <FaArrowRightLong /></span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Card className="h-100 border-1 shadow-sm p-4 rounded-4">
                <Card.Body className="p-0 d-flex flex-column justify-content-between">
                  <div>
                    <div
                      className="d-flex align-items-center justify-content-center bg-light border rounded-3 mb-4"
                      style={{ width: '60px', height: '60px' }}
                    >
                      <RiSettings5Fill className="fs-2 text-warning" />

                    </div>
                    <Card.Title className="fw-semibold text-dark fs-4 mb-3">
                      Customizable Workflow
                    </Card.Title>
                    <Card.Text className="text-muted fs-6 lh-base mb-4">
                      Manage everything from tasks to team communication in on intuitive platform designed to boost productivity
                    </Card.Text>
                  </div>

                  <div className="d-flex align-items-center text-dark fw-semibold mt-auto" style={{ cursor: 'pointer' }}>
                    <span className="me-2">Learn More &nbsp; <FaArrowRightLong /></span>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Advantage */}

      <section>
        <Container fluid className='py-5'>
          <Row className="justify-content-center text-center ">
            <Col lg={8} md={10}>
              <p className="text-danger mb-4 px-md-5">
                Advantages
              </p>
              <h1 className="fw-bold display-4 pb-3 text-dark">
                Key features to boost your productivity
              </h1>
              <p className="text-muted mb-4 px-md-5">
                Explore the essential tools designed to streamline your workflow, enhanced team <br />
                collaboration, and ensure yur projects run smoothly from start to finish
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center g-4">
            <Col xs={12} md={6} lg={4}>
              <Card className="h-100 border-1 shadow-sm p-4 rounded-4">
                <Card.Body className="p-0 d-flex flex-column justify-content-between">
                  <div>
                    <div
                      className="d-flex align-items-center justify-content-center fs-2 fw-bold bg-light border rounded-3 mb-4"
                      style={{ width: '60px', height: '60px' }}
                    >
                      01
                    </div>
                    <Card.Title className="fw-semibold text-dark fs-4 mb-3">
                      Seamless Collaboration
                    </Card.Title>
                    <Card.Text className="text-muted fs-6 lh-base mb-4">
                      Empower your team to collaborate in real-time with easy task management
                      and transparent project tracking.
                    </Card.Text>
                  </div>
                  <div>
                    <img src="/images/home/Card01.png" alt="Card01"
                      className='img-fluid' />
                  </div>


                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Card className="h-100 border-1 shadow-sm p-4 rounded-4">
                <Card.Body className="p-0 d-flex flex-column justify-content-between">
                  <div>
                    <div
                      className="d-flex align-items-center justify-content-center fs-2 fw-bold bg-light border rounded-3 mb-4"
                      style={{ width: '60px', height: '60px' }}
                    >
                      02

                    </div>
                    <Card.Title className="fw-semibold text-dark fs-4 mb-3">
                      All-in-One Solution
                    </Card.Title>
                    <Card.Text className="text-muted fs-6 lh-base mb-4">
                      Manage everything from tasks to team communication in one intuitive platform designed to boost productivity
                    </Card.Text>
                  </div>
                  <div>
                    <img src="/images/home/Card02.png" alt="Card01"
                      className='img-fluid' />
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={4}>
              <Card className="h-100 border-1 shadow-sm p-4 rounded-4">
                <Card.Body className="p-0 d-flex flex-column justify-content-between">
                  <div>
                    <div
                      className="d-flex align-items-center justify-content-center fs-2 fw-bold bg-light border rounded-3 mb-4"
                      style={{ width: '60px', height: '60px' }}
                    >
                      03

                    </div>
                    <Card.Title className="fw-semibold text-dark fs-4 mb-3">
                      Customizable Workflow
                    </Card.Title>
                    <Card.Text className="text-muted fs-6 lh-base mb-4">
                      Manage everything from tasks to team communication in on intuitive platform designed to boost productivity
                    </Card.Text>
                  </div>

                  <div>
                    <img src="/images/home/Card03.png" alt="Card01"
                      className='img-fluid' />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container >
      </section>

      {/* Features */}
      <section>
        <Container fluid className='bg-light py-5'>
          <Row className="justify-content-center text-center ">
            <Col lg={8} md={10}>
              <p className="text-danger mb-4 px-md-5">
                Features
              </p>
              <h1 className="fw-bold display-4 pb-3 text-dark">
                Powerful Features to Elevate Your Workflow
              </h1>
              <p className="text-muted mb-4 px-md-5">
                Explore advanced tools that help you samter decisions, track progress, and manage your <br /> tasks with ease. Stay organized and control with features designed to enhanced you productivity
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center g-4">
            <Col xs={12} md={6} lg={3}>
              <Card className=" h-100 border-1 border-success shadow-sm p-4 rounded-4">
                <Card.Body className="p-0 d-flex flex-column justify-content-between">
                  <div>
                    <div
                      className="d-flex align-items-center justify-content-center fs-2 fw-bold bg-light border rounded-3 mb-4"
                      style={{ width: '60px', height: '60px' }}
                    >
                      <FaLightbulb className='fs-2 text-success' />
                    </div>
                    <Card.Title className="fw-semibold text-dark fs-4 mb-3">
                      Make Smart Decisions
                    </Card.Title>
                    <Card.Text className="text-muted fs-6 lh-base mb-4">
                      Get real-tiime insights, reports, and alerts to help you make more informed decisions
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card className="h-100 border-1 border-danger shadow-sm p-4 rounded-4">
                <Card.Body className="p-0 d-flex flex-column justify-content-between">
                  <div>
                    <div
                      className="d-flex align-items-center justify-content-center fs-2 fw-bold bg-light border rounded-3 mb-4"
                      style={{ width: '60px', height: '60px' }}
                    >
                      <IoMdCheckmarkCircleOutline className='fs-2 text-danger' />

                    </div>
                    <Card.Title className="fw-semibold text-dark fs-4 mb-3">
                      Optimized Your Goals
                    </Card.Title>
                    <Card.Text className="text-muted fs-6 lh-base mb-4">
                      Track your progress and stay aligned with personal or project goals using tracking tools
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card className="h-100 border-primary border-1 shadow-sm p-4 rounded-4">
                <Card.Body className="p-0 d-flex flex-column justify-content-between">
                  <div>
                    <div
                      className="d-flex align-items-center justify-content-center fs-2 fw-bold bg-light border rounded-3 mb-4"
                      style={{ width: '60px', height: '60px' }}
                    >
                      <PiListChecksFill className='fs-2 text-primary' />

                    </div>
                    <Card.Title className="fw-semibold text-dark fs-4 mb-3">
                      Task Managment
                    </Card.Title>
                    <Card.Text className="text-muted fs-6 lh-base mb-4">
                      Easily manage tasks, deadlines, and priorities to keep projects running smoothly
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <Card className="h-100 border-warning border-1 shadow-sm p-4 rounded-4">
                <Card.Body className="p-0 d-flex flex-column justify-content-between">
                  <div>
                    <div
                      className="d-flex align-items-center justify-content-center fs-2 fw-bold bg-light border rounded-3 mb-4"
                      style={{ width: '60px', height: '60px' }}
                    >
                      <IoChatbox className='fs-2 text-warning' />

                    </div>
                    <Card.Title className="fw-semibold text-dark fs-4 mb-3">
                      Customizable Workflow
                    </Card.Title>
                    <Card.Text className="text-muted fs-6 lh-base mb-4">
                      Manage everything from tasks to team communication in on intuitive platform designed to boost productivity
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container >
      </section >

    </>
  )
}