import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import ErrorPage from "./pages/error-page";
import PackagePage from "./pages/package/PackagePage.component";

import "./index.css";

import packageData from "./data/data";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "packagePage/:id",
    element: <PackagePage packageData={packageData} />,
  },
]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
