import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {

    const { id } = useParams();
  // Sample Product Data (Can be replaced with API data)
  const product = {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 199.99,
    image: "https://via.placeholder.com/300",
  };
  return (

    <>
      <div className="min-h-screen my-5">

        {/* Product Detail */}
        <div className="container mx-auto mt-10 p-4 bg-white shadow rounded-md">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Product Image */}
            <div className="w-full lg:w-1/2">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto rounded-md"
              />
            </div>

            {/* Product Info */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">{product.name} {id}</h2>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <p className="text-2xl font-semibold text-green-600 mb-6">
                ${product.price}
              </p>

              {/* Quantity Selector */}
              <div className="mb-4 flex items-center gap-4">
                <label className="text-lg font-medium" htmlFor="quantity">
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  value={2}
                  min="1"
                  
                  className="border rounded-md p-2 w-16 text-center"
                />
              </div>

              {/* Add to Cart Button */}
              <button
                className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="container mx-auto mt-12">
          <h3 className="text-2xl font-bold mb-6">Related Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Example Related Product */}
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white shadow-md rounded-md p-4 text-center"
              >
                <img
                  src="https://via.placeholder.com/150"
                  alt="Related Product"
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h4 className="text-lg font-semibold">Product {item}</h4>
                <p className="text-gray-700">$99.99</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
