import { useState } from "react";

const ModalPopup = () => {
  const [isOpen, setIsOpen] = useState(false); // Modal visibility state

  // Function to open the modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold text-center mb-6">
        Modal Popup Example
      </h1>

      {/* Button to open modal */}
      <div className="text-center">
        <button
          onClick={openModal}
          className="bg-blue-500 text-white px-6 py-2 rounded"
        >
          Open the Modal
        </button>
      </div>

      {/* Modal (conditionally rendered) */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal} // Close modal on background click
        >
          <div
            className="bg-white rounded-lg shadow-lg w-1/3"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Modal Header */}
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-semibold">Modal Header</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-800"
              >
                &times;
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <p>
                This is the content of the modal. You can add any information
                you like here.
              </p>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t flex justify-end">
              <button
                onClick={closeModal}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalPopup;
