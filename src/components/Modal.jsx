import React from "react";

export default function Modal({ open, onClose, selectedItem }) {
  if (!open) return null;

  const handleClose = () => {
    onClose();
  };

  return (
    <dialog open={open} onClose={handleClose} className="fixed inset-0 w-full h-full bg-gray-800 bg-opacity-20">
      <div className="flex items-center justify-center min-h-screen">
        <div className="absolute inset-0"></div>
        <div className="relative bg-white p-10 rounded-lg">
          <div className="text-xl font-semibold mb-2 text-center pb-4">More Information</div>
          <div className="space-y-3">
            <div>First Name: {selectedItem.firstName}</div>
            <div>Last Name: {selectedItem.lastName}</div>
            <div>Birth Date: {selectedItem.birthDate}</div>
            <div>Gender: {selectedItem.gender}</div>
            <div>Customer Identification Code: {selectedItem.customerIdentificationCode}</div>
          </div>
          <button onClick={handleClose} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
}