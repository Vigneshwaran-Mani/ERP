import React, { useState } from "react";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
        oid: "",
        pid:"",
        name: "",
        details: "",
        total: "",
        date: "",
        status: "pending",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.oid && formState.pid && formState.name &&formState.details && formState.total && formState.date && formState.status) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  const labelStyle = `mb-1 block text-sm font-medium text-gray-700`;
  const inputStyle = `border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none text-sm font-medium text-gray-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500`;
  const submitStyle = `w-full mt-6 flex flex-col justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`;
  const errorStyle = `bg-red-200 p-2 mb-4 text-red-800 rounded-md `;

  return (
    <div
      id="container"
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center shadow"
      onClick={(e) => {
        if (e.target.id === "container") closeModal();
      }}
    >
      <div className="w-96 bg-white p-8 rounded-lg">
        <form>
          <div className="flex flex-col mb-2">
            <label className={labelStyle} htmlFor="oid">Order ID</label>
            <input className={inputStyle} name="oid" onChange={handleChange} value={formState.oid} />
          </div>
          <div className="flex flex-col mb-2">
            <label className={labelStyle} htmlFor="pid">Product ID</label>
            <input className={inputStyle} name="pid" onChange={handleChange} value={formState.pid} />
          </div>
          <div className="flex flex-col mb-2">
            <label className={labelStyle} htmlFor="name">Customer Name</label>
            <input className={inputStyle} name="name" onChange={handleChange} value={formState.name} />
          </div>
          <div className="flex flex-col mb-2">
            <label className={labelStyle} htmlFor="details">Order Details</label>
            <textarea
              className={inputStyle}
              name="details"
              onChange={handleChange}
              value={formState.details}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label className={labelStyle} htmlFor="total">Order Total</label>
            <input className={inputStyle} name="total" onChange={handleChange} value={formState.total} />
          </div>
          <div className="flex flex-col mb-2">
            <label className={labelStyle} htmlFor="date">Order Date</label>
            <input className={inputStyle} name="date" onChange={handleChange} value={formState.date} />
          </div>
          <div className="flex flex-col mb-2">
            <label className={labelStyle} htmlFor="status">Status</label>
            <select
              className={inputStyle}
              name="status"
              onChange={handleChange}
              value={formState.status}
            >
              <option value="confirmed">Confirmed</option>
              <option value="pending">Pending</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
          {errors && <div className={errorStyle}>{`Please include: ${errors}`}</div>}
          <button type="submit" className={submitStyle} onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}