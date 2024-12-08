import React, { useState } from "react";

const Modal = ({ isOpen, onClose, title, children,customClass }) => {
  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50`}>
      <div className={`bg-white w-full  mx-4 p-6 rounded-lg shadow-lg ${customClass}`}>
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-100 hover:text-gray-700 bg-red-500 w-6 h-6 rounded-full"
          >
            &times;
          </button>
        </div>
        {/* Content */}
        <div className="mt-4">{children}</div>
       
      </div>
    </div>
  );
};

export default Modal;
