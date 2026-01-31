import { StrictMode } from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App.jsx';
import LogIn from './pages/LogIn.jsx'
import SignIn from './pages/SignIn.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/login",
    Component: LogIn,
  },
  {
    path: "/signin",
    Component: SignIn,
  },
]);

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <RouterProvider router={router} />,
);