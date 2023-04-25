import { useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import data from "./data/data";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Products } from "./components/Products/Products";
import { Product } from "./components/Product/Product";
import "./App.scss";
const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet className="outlet" />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <div className="outlet">home</div>,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);

function App() {
  console.log(data);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
