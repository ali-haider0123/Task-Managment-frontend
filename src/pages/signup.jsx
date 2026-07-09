import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const [file, setFile] = useState();

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
    <div className="container d-flex justify-content-center align-items-center vh-100">
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
              onChange={handleInputChage}
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
              onChange={handleInputChage}
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
              onChange={handleInputChage}
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
    </div>
  );
};

export default Signup;
