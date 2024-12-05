import React from "react";
import ProductSIdebar from "./ProductSIdebar";
import ProductGrid from "./ProductGrid";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Product Store</h1>
            <Link to="/product/add">
            <button className="bg-green-600 px-4 py-2 text-white rounded-lg">Add Product</button>
            </Link>
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-md p-2 w-1/3"
            />
          </div>
        </header>

        <div className="container mx-auto flex mt-6">
          <ProductSIdebar />
          <ProductGrid />
        </div>
      </div>
    </>
  );
};

export default Product;
