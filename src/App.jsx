import { Routes, Route, Link } from "react-router-dom";
import CategoryPage from "./pages/category";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { UserContext } from "./context/userContext";

import TaskPage from "./pages/task";
import HomePage from "./pages/home";
import Navbar from "./components/navbar";


function App() {
  

  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg d-flex navbar-dark bg-primary px-4 py-2">
        
        <Link to="/" className="navbar-brand fw-bold fs-4">
          ✅ TaskFlow
        </Link>

        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          
          {user.user ? (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
              <li className="nav-item">
                <Link to="/task" className="nav-link text-white mx-2">
                  Task
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category" className="nav-link fw-semibold">
                  🗂️ Categories
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3"></ul>
          )}

          
          <div className="d-flex align-items-center">
            {user.user ? (
              <div className="dropdown">
                
                <button
                  className="btn btn-light d-flex align-items-center gap-2 rounded-pill px-3 py-2"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle bg-primary text-white fw-bold"
                    style={{
                      height: "32px",
                      width: "32px",
                      fontSize: "14px",
                      flexShrink: 0,
                    }}
                  >
                    {user.user.name?.charAt(0).toUpperCase()}
                  </div>
                  <span className="fw-semibold text-dark d-none d-sm-inline">
                    {user.user.name}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    className="bi bi-chevron-down text-secondary"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </button>

                
                <ul
                  className="dropdown-menu dropdown-menu-end shadow mt-2"
                  style={{ minWidth: "220px" }}
                >
                  <li className="px-3 py-2">
                    <div className="fw-bold text-dark">{user.user.name}</div>
                    <div className="text-muted small">{user.user.email}</div>
                  </li>
                  <li>
                    <hr className="dropdown-divider my-1" />
                  </li>
                  <li>
                    <button
                      className="dropdown-item text-danger fw-semibold d-flex align-items-center gap-2"
                      onClick={() => {
                        user.setUser(null);
                        localStorage.removeItem("user");
                        localStorage.removeItem("token");
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-box-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                        />
                      </svg>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="d-flex gap-2">
                <Link to="/login" className="btn btn-light fw-semibold">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-warning fw-semibold">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/task" element={<TaskPage />} />
      </Routes>
    </div>
  );
}

export default App;
