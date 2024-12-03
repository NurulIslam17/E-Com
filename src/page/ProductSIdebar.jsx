import React from "react";

const ProductSIdebar = () => {
  return (
    <>
      <aside className="w-1/4 bg-white p-4 shadow-md rounded-md">
        <h2 className="text-xl font-semibold mb-4">Filter Options</h2>

        {/* Category Filter */}
        <div className="mb-4">
          <h3 className="font-medium">Category</h3>
          <select className="border rounded-md w-full p-2">
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
          </select>
        </div>

        {/* Ratings Filter */}
        <div>
          <h3 className="font-medium">Ratings</h3>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="4-star" />
            <label htmlFor="4-star">4 Stars & Up</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="3-star" />
            <label htmlFor="3-star">3 Stars & Up</label>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ProductSIdebar;
