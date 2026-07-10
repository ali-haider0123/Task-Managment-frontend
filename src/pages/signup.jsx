import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card, Form, Alert } from 'react-bootstrap';

const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const [file, setFile] = useState();

  const [error, setError] = useState("");

  function handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setError(null);

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (formData.name.length < 3) {
      setError("Invalid Name, minimum length 3");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setError("Invalid Email");
      return;
    }

    if (formData.password.length < 6) {
      setError("Invalid Password, minimum length 6");
      return;
    }

    const data = new FormData();

    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("password", formData.password);
    if (file) {
      data.append("img", file);
    }

    setError("");

    try {
      const res = await fetch("http://localhost:8080/api/v1/user/create", {
        method: "POST",
        body: data,
      });

      const jsondata = await res.json();
      if (!res.ok) {
        // console.log(jsondata.message)
        setError(jsondata.message);
        return;
      }

      setError("Successfully signed up");

      setTimeout(() => {
        navigate("/login")
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  }

  function handleFileChange(e) {
    setFile(e.target.files[0]);
  }
  return (
    <>
      {/* <div className="container-fluid d-flex bg-light justify-content-center align-items-center vh-100">
        <div
          className="card shadow p-4"
          style={{ maxWidth: "450px", width: "100%" }}
        >
          <h2 className="text-center text-primary mb-4">Sign Up</h2>

          <div className="bg-danger text-light text-center">
            {error ? error : null}
          </div>

          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                onChange={handleInputChange}
                className="form-control"
                id="fullName"
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                onChange={handleInputChange}
                name="email"
                required
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                onChange={handleInputChange}
                name="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="profilePic" className="form-label">
                Profile Picture
              </label>
              <input
                type="file"
                className="form-control"
                id="profilePic"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
          </form>
          <button onClick={handleSubmit} className="btn btn-primary w-100">
            Sign Up
          </button>
        </div>
      </div> */}
      <Container fluid className="min-vh-100 d-flex p-0">
        <Row className="g-0 w-100">
          <Col xs={12} md={6} className="d-flex align-items-center justify-content-center p-4 p-md-5">
            <div className="w-100" style={{ maxWidth: "400px" }}>
              <h2 className="text-primary mb-4 fw-bold">Sign Up</h2>

              {error && (
                <Alert variant="danger" className="text-center py-2 mb-3 small">
                  {error}
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="fullName">
                  <Form.Label className="fw-medium text-secondary small">Full Name</Form.Label>
                  <Form.Control
                    className="shadow-sm p-2.5 bg-body rounded border-1"
                    type="text"
                    
                    name="name"
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label className="fw-medium text-secondary small">Email Address</Form.Label>
                  <Form.Control
                    className="shadow-sm p-2.5 bg-body rounded border-1"
                    type="email"
                    className="shadow p-3 mb-2 bg-body rounded"
                    name="email"
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label className="fw-medium text-secondary small">Password</Form.Label>
                  <Form.Control
                    className="shadow-sm p-2.5 bg-body rounded border-1"
                    type="password"
                    className="shadow p-3 mb-2 bg-body rounded"
                    name="password"
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="profilePic">
                  <Form.Label className="fw-medium text-secondary small">Profile Picture</Form.Label>
                  <Form.Control
                    className="shadow-sm p-2 bg-body rounded border-1"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </Form.Group>

                <Button type="submit" variant="primary" className="w-100 py-2.5 fw-semibold shadow-sm mt-2">
                  Create Account
                </Button>
              </Form>
            </div>
          </Col>

          <Col md={6} className=" d-none d-md-flex align-items-center justify-content-center p-5">
            <img
              src="/images/signup/signup.png"
              alt="Signup background"
              className="img-fluid h-auto"
            />
          </Col>

        </Row>
      </Container >
    </>
  );
};

export default Signup;
