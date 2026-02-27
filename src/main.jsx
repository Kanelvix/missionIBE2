import { StrictMode } from 'react';
import ReactDOM from "react-dom/client";
import './index.css';

import App from './App.jsx';
import LogIn from './pages/LogIn.jsx';
import SignIn from './pages/SignIn.jsx';
import HomePage from './pages/HomePage.jsx';
import Kategori from './pages/Kategori.jsx';
import Pesanan from './pages/Pesanan.jsx';
import Kelas from './pages/Kelas.jsx';
import Profil from './pages/Profil.jsx';

import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import { AuthLayout } from './layout/AuthLayout.jsx';
import { MainLayout } from './layout/MainLayout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import DashboardLayout from './layout/DashboardLayout.jsx';
import Products from './pages/Products.jsx';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/homepage" replace />
      },
      {
        element: <AuthLayout />,
        children: [
          { path: "/login", Component: LogIn },
          { path: "/signin", Component: SignIn },
        ]
      },
      {
        element: <MainLayout />,
        children: [
          { path: "/homepage", Component: HomePage },
          { path: "/kategori", Component: Kategori },
          { path: "/pesanan", Component: Pesanan },
          { path: "/kelas", Component: Kelas },
          { path: "/profil", Component: Profil },
        ]
      },
      {
        element: <DashboardLayout />,
        children:[
          {path: "/dashboard", Component: Dashboard},
          {path: "/products", Component: Products}
        ]
      }
    ]
  }
]);

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <RouterProvider router={router} />,
);