import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./page/Layout";
import Home from "./page/Home";
import NoPage from "./page/NoPage";
import Product from "./page/Product";
import ProductDetails from "./page/ProductDetails";
import AddProduct from "./page/AddProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/add" element={<AddProduct />} />
          <Route path="product/:id/details" element={<ProductDetails />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
