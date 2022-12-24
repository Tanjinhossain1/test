import React from "react";

const DeleteModal = ({ children }) => {
  return (
    <div>
      <input type="checkbox" id="deleteModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-red-400 text-2xl">
            Are You Sure You Want To Delete It.
          </h3>

          <div className="modal-action">
            {children}
            <label htmlFor="deleteModal" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
