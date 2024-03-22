import React, { useState } from "react";

 const ProductModel = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
        pid: "",
        name: "",
        description: "",
        category: "",
        price: "",
        quantity: "",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    if (formState.pid && formState.name && formState.description &&formState.category && formState.price && formState.quantity) {
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
      id="order"
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center shadow"
      onClick={(e) => {
        if (e.target.id === "order") closeModal();
      }}
    >
      <div className="w-96 bg-white p-8 rounded-lg">
        <form>
          <div className="flex flex-col mb-2">
            <p className="flex flex-col m-4 text-2xl  text-gray-900 font-black justify-center items-center">Products</p>
            <label className={labelStyle} htmlFor="pid">Product ID</label>
            <input className={inputStyle} name="pid" onChange={handleChange} value={formState.pid} />
          </div>
          <div className="flex flex-col mb-2">
            <label className={labelStyle} htmlFor="name">Product Name</label>
            <input className={inputStyle} name="name" onChange={handleChange} value={formState.name} />
          </div>
          <div className="flex flex-col mb-2">
            <label className={labelStyle} htmlFor="description">Product Description</label>
            <input className={inputStyle} name="description" onChange={handleChange} value={formState.description} />
          </div>
          <div className="flex flex-col mb-2">
            <label className={labelStyle} htmlFor="category">Category</label>
            <input className={inputStyle} name="category" onChange={handleChange} value={formState.category} />
          </div>
          <div className="flex flex-col mb-2">
            <label className={labelStyle} htmlFor="price">Price</label>
            <input className={inputStyle} name="price" onChange={handleChange} value={formState.price} />
          </div>
          <div className="flex flex-col mb-2">
            <label className={labelStyle} htmlFor="quantity">Quantity</label>
            <input className={inputStyle} name="quantity" onChange={handleChange} value={formState.quantity} />
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

export default ProductModel;