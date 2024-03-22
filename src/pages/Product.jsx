import React,{useState} from 'react';
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import ProductModel  from './ProductModel';
import Header from '../components/Header';
import { useStateContext } from '../contexts/ContextProvider';

const thStyle = `w-32 p-3 text-sm font-semibold tracking-wide text-left`;
const tdStyle = `p-3 text-sm text-gray-700`;

const Table = ({ rows, deleteRow, editRow }) => {
    return (
      <div className='overflow-auto rounded-lg shadow'>
        <table className="w-full">
          <thead className='bg-gray-100 border-b-2 border-gray-400'>
            <tr>
              <th className={thStyle}>Product ID</th>
              <th className={thStyle}>Product Name</th>
              <th className=' p-3 text-sm font-semibold tracking-wide text-left'>Description</th>
              <th className= {thStyle}>Category</th>
              <th className={thStyle}>Price</th>
              <th className={thStyle}>Stock Quantity</th>
              <th className={thStyle}>Actions</th>
            </tr>
          </thead><tbody className='divide-y divide-gray-100'>
            {rows.map((rows, idx) => {
                return (
                <tr className="bg-white" key={idx}>
                  <td className={tdStyle}>{rows.pid}</td>
                  <td className={tdStyle}>{rows.name}</td>
                  <td className={tdStyle}>{rows.description}</td>
                  <td className={tdStyle}>{rows.category}</td>
                  <td className={tdStyle}>{rows.price}</td>
                  <td className={tdStyle}>{rows.quantity}</td>
                  <td className="fit p-3 text-sm text-gray-700">
                    <span className="flex space-evenly">
                      <BsFillPencilFill
                        className="p-2 text-neutral-900 rounded-lg cursor-pointer"
                        size="2rem"
                        onClick={() => editRow(idx)}
                      />
                      <BsFillTrashFill
                        className="p-2 text-red-600 rounded-lg cursor-pointer"
                        size="2rem"
                        onClick={() => deleteRow(idx)}
                      />
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };


const Product = () =>{

  const submitStyle = `mb-12 mt-4 flex flex-col justify-center items-center py-2 px-4 border border-transparent rounded-lg shadow-md text-md font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`;

  const [modalOpen, setModalOpen] = useState(false);
  const {prows, setProws} = useStateContext();
  const [rowToEdit, setRowToEdit] = useState(null);
  console.log(prows);

  const handleDeleteRow = (targetIndex) => {
    setProws(prows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setProws([...prows, newRow])
      : setProws(
          prows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl shadow-2xl">
    <div className='flex justify-between'>
        <Header title="Products" />
        <button onClick={() => setModalOpen(true)} className={submitStyle}>
        Add Products
      </button>
    </div> 
      <Table rows={prows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      {modalOpen && (
        <ProductModel
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && prows[rowToEdit]}
        />
      )}
    </div>
  );
}

export default Product;