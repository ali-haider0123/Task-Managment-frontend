import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserProvider from "./context/userContext.jsx";
import TaskProvider from "./context/taskContext.jsx";

import App from "./App.jsx";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter } from "react-router-dom";
import CategoriesProvider from "./context/categoryContext.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <TaskProvider>
      <CategoriesProvider>
        <UserProvider>
          <App />,
        </UserProvider>
      </CategoriesProvider>
    </TaskProvider>
  </BrowserRouter>,
  // </StrictMode>,
);

library.add(fas);
library.add(far);
library.add(fab);