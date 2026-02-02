import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import { createBrowserRouter, Navigate, Router, RouterProvider } from "react-router-dom";

const DefaultRouter = () => {
  const authData = JSON.parse(localStorage.getItem("authData"));
  if(authData){
  return<Navigate to = "/Login" replace/>;
  }
  return <Navigate to = "/Register" replace/>;
}
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <DefaultRouter />
    },
    {
      path: "/Login",
      element: <Login />
    },
    {
      path: "/Register",
      element: <Register />
    },
  ]);

  return <RouterProvider router={route} />;
}
export default App;