import React, { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const router = useNavigate()
  const user = useContext(UserContext);

  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
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

    if (formData.Password.length < 6) {
      setError("Invalid Password, minimum length 6");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.Email)) {
      setError("Invalid Email");
      return;
    }

    setError("");

    try {
      const res = await fetch("http://localhost:8080/api/v1/user/login", {
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
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow p-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center text-primary mb-4">Login</h2>
        <div className="bg-danger text-light text-center">
          {error ? error : null}
        </div>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="Email"
              onChange={handleInputChage}
              className="form-control"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="Password"
              onChange={handleInputChage}
              id="password"
              placeholder="Enter your password"
            />
          </div>
        </form>

        <button onClick={handleSubmit} className="btn btn-primary w-100">Login</button>
      </div>
    </div>
  );
};

export default Login;
