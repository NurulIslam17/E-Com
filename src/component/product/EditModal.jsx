import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "../common/Modal";
import axios from "axios";
import { toast } from "react-toastify";

const EditModal = ({ isOpen, onClose, productId, title,getAllProduct, customClass }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [isDisabled, setIsDisabled] = useState(false);
  const [desLength, setDesLength] = useState(0);
  const [product, setProduct] = useState();

  const getProductById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/product/${productId}`
      );
      setDesLength(response?.data?.description.length);
      setProduct(response?.data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  setValue("name", product?.name);
  setValue("category", product?.category);
  setValue("brand", product?.brand);
  setValue("price", product?.price);
  setValue("quantity", product?.quantity);
  setValue("description", product?.description);

  const handleDescriptionChange = (event) => {
    const value = event.target.value;
    setDesLength(desLength + value.length);
    if (desLength > 300) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    axios
      .put(`http://localhost:8080/api/product/${productId}`, data)
      .then((response) => {
        onClose();
        getAllProduct();
        toast.success("Product updated successfully!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  useEffect(() => {
    if (productId) {
      getProductById();
    }
  }, [productId]);
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title={title}
        customClass={customClass}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          {/** Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name{productId}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          </div>

          {/** Description Field */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-medium mb-2"
            >
              Description <span>({desLength}/300)</span>
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
              //   disabled={isDisabled}
            //   onChange={handleDescriptionChange}
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/** Button */}
          <div className="mt-6 flex justify-between gap-4">
            <button
              type="submit"
              className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
            >
              Update
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default EditModal;
