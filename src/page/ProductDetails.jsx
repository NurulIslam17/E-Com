import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NoImg from "../assets/image/no-img1.jpg";
import { toast } from "react-toastify";
import axios from "axios";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getProductDetails = async() => {
      try{
        const response = await axios.get(`http://localhost:8080/api/product/${id}`);
        setProductDetails(response?.data);
      }catch(error){
        toast.error(error.message);
      }
    };
    getProductDetails();
  },[]);
console.log(productDetails);


  return (
    <>
      <div className="min-h-screen my-5">
        {/* Product Detail */}
        <div className="max-w-6xl mx-auto mt-10 p-4 bg-white shadow-lg rounded-md border-l-8 border-5 border-green-500 border-t-2">
          <div className="flex justify-start gap-4">
            <div className="object-cover w-full md:max-w-[20rem]">
              <img src={NoImg} className="w-full h-full object-cover" alt="" srcSet="" />
            </div>
            <div>
              <p className="text-3xl text-slate-600  my-3">{productDetails.name}</p>
              <p className="text-lg text-justify">{productDetails.description}</p>
              <div className="my-3">
                <span className="text-lg bg-green-400 text-white px-4 py-1 rounded-lg">${productDetails.price}</span>
                <span className="text-xl text-red-600 line-through mx-4">$5000.00</span>
              </div>
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
