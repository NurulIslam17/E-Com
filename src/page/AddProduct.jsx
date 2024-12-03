import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:8080/api/product", data)
      .then((response) => {
        toast.success("Product created successfully!");
        navigate("/product");
        console.log("Product created successfully:", response.data);
      })
      .catch((error) => {
        console.error(
          "Error creating product:",
          error.response ? error.response.data : error.message
        );
      });
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 rounded shadow-md bg-[#f1f2f6]">
      <h2 className="text-2xl font-bold text-gray-700 mb-4">Product Form</h2>
      <hr />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div>
          {/** Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              className={`w-full p-2 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/** Category Field */}
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-gray-700 font-medium mb-2"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              {...register("category", { required: "Category is required" })}
              className={`w-full p-2 border ${
                errors.category ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            {errors.category && (
              <p className="text-red-500 text-sm mt-1">
                {errors.category.message}
              </p>
            )}
          </div>

          {/** Brand Field */}
          <div className="mb-4">
            <label
              htmlFor="brand"
              className="block text-gray-700 font-medium mb-2"
            >
              Brand
            </label>
            <input
              type="text"
              id="brand"
              {...register("brand", { required: "Brand is required" })}
              className={`w-full p-2 border ${
                errors.brand ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            {errors.brand && (
              <p className="text-red-500 text-sm mt-1">
                {errors.brand.message}
              </p>
            )}
          </div>

          {/** Release Date Field */}
          <div className="mb-4">
            <label
              htmlFor="releaseDate"
              className="block text-gray-700 font-medium mb-2"
            >
              Release Date
            </label>
            <input
              type="date"
              id="releaseDate"
              {...register("releaseDate", {
                required: "Release Date is required",
              })}
              className={`w-full p-2 border ${
                errors.releaseDate ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            {errors.releaseDate && (
              <p className="text-red-500 text-sm mt-1">
                {errors.releaseDate.message}
              </p>
            )}
          </div>
        </div>

        <div>
          {/** Price Field */}
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-700 font-medium mb-2"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              {...register("price", {
                required: "Price is required",
                min: { value: 0, message: "Price must be a positive number" },
              })}
              className={`w-full p-2 border ${
                errors.price ? "border-red-500" : "border-gray-300"
              } rounded`}
              step="0.01"
            />
            {errors.price && (
              <p className="text-red-500 text-sm mt-1">
                {errors.price.message}
              </p>
            )}
          </div>

          {/** Quantity Field */}
          <div className="mb-4">
            <label
              htmlFor="quantity"
              className="block text-gray-700 font-medium mb-2"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              {...register("quantity", {
                required: "Quantity is required",
                min: { value: 1, message: "Quantity must be at least 1" },
              })}
              className={`w-full p-2 border ${
                errors.quantity ? "border-red-500" : "border-gray-300"
              } rounded`}
            />
            {errors.quantity && (
              <p className="text-red-500 text-sm mt-1">
                {errors.quantity.message}
              </p>
            )}
          </div>

          {/** Description Field */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-medium mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              {...register("description", {
                required: "Description is required",
              })}
              className={`w-full p-2 border ${
                errors.description ? "border-red-500" : "border-gray-300"
              } rounded`}
              rows="3"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/** Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
