import React, { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card, Form, Alert } from 'react-bootstrap';

const Login = () => {

  const router = useNavigate()
  const user = useContext(UserContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  function handleInputChage(e) {
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

    if (formData.password.length < 6) {
      setError("Invalid Password, minimum length 6");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setError("Invalid Email");
      return;
    }

    setError("");

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const jsondata = await res.json();
      if (!res.ok) {
        // console.log(jsondata.message)
        setError(jsondata.message);
        return;
      }

      setError("Successfully login up");
      console.log(jsondata)
      router("/category")
      user.setUser(jsondata.user)
      localStorage.setItem("token", jsondata.token)
      localStorage.setItem("user", JSON.stringify(jsondata.user))
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <Container fluid className="min-vh-100 d-flex p-0">
        <Row className="g-0 w-100">
          <Col xs={12} md={6} className="d-flex align-items-center justify-content-center p-4 p-md-5">
            <div className="w-100" style={{ maxWidth: "400px" }}>
              <h2 className="text-primary pt-4 mb-3 fw-bold">Login</h2>

              {error && (
                <Alert variant="danger" className="text-center mb-3 small">
                  {error}
                </Alert>
              )}

              <form className="py-5">
                <div className="pb-5">
                  <label htmlFor="email" className="form-label fs-5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleInputChage}
                    className="form-control shadow p-3 bg-body rounded border-1"
                    id="email"
                  />
                </div>

                <div className="pb-2">
                  <label htmlFor="password" className="form-label fs-5">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control shadow p-3 bg-body rounded border-1"
                    name="password"
                    onChange={handleInputChage}
                    id="password"
                  />
                </div>
              </form>

              <Button type="submit" variant="primary" onClick={handleSubmit} className="w-100 p-3 fw-semibold shadow-sm mt-2">
                Create Account
              </Button>
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

export default Login;
