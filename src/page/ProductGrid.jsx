import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NoImg from "../assets/image/no-img2.jpg";
import { TrashIcon } from "@heroicons/react/16/solid";
import Swal from "sweetalert2";

const ProductGrid = ({ filteredProducts }) => {
  const [products, setProducts] = useState([]);

  const getAllProduct = () => {
    axios
      .get("http://localhost:8080/api/products")
      .then((response) => {
        setProducts(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      axios
        .delete(`http://localhost:8080/api/product/${id}`)
        .then((response) => {
          getAllProduct();
        })
        .catch((error) => {
          console.error(error);
        });

      Swal.fire({
        title: "Deleted!",
        text: "The item has been deleted.",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <>
      <div className="w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6 p-4 mx-4 shadow-sm">
        {products && products.length > 0 ? (
          products.map((product, index) => (
            <div
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow relative dark:bg-gray-800 dark:border-gray-700"
            >
              <Link to="#">
                <img
                  className="rounded-t-lg w-full"
                  src={NoImg}
                  alt={product.name}
                />
              </Link>
              <div className="p-5">
                <Link to="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {product.name}
                  </h5>
                </Link>

                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    {[1, 2, 3, 4].map((_, index) => (
                      <svg
                        key={index}
                        className="w-4 h-4 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}

                    <svg
                      className="w-4 h-4 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                    4.0
                  </span>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {product.description}
                </p>

                <div className="my-5">
                  <span className="text-xl mx-4">
                  ${product.price}
                  </span>
                  <span className="text-red-600 line-through mx-4">
                    $5000.00
                  </span>
                </div>
                <Link
                  to={`/product/${product.id}/details`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
              <span className="absolute -top-2 -right-2 bg-red-600 p-2 rounded-full">
                <TrashIcon
                  onClick={() => handleDelete(product.id)}
                  className="w-4 h-4 text-white"
                />
              </span>
            </div>
          ))
        ) : (
          <div className="w-full text-center text-gray-500 flex justify-center items-start">
            <h1 className="text-center text-2xl">No Products Found</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductGrid;
