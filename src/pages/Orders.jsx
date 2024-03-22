import React,{useState} from 'react';
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { Modal } from './Modal';
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
              <th className={thStyle}>Order ID</th>
              <th className={thStyle}>Product ID</th>
              <th className={thStyle}>Customer Name</th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left'>Order Details</th>
              <th className={thStyle}>Order Total</th>
              <th className={thStyle}>Order Date</th>
              <th className={thStyle}>Status</th>
              <th className={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-100'>
            {rows.map((row, idx) => {
              const statusText =
                row.status.charAt(0).toUpperCase() + row.status.slice(1);
  
              return (
                <tr key={idx} className='bg-white'>
                  <td className={tdStyle}>{row.oid}</td>
                  <td className={tdStyle}>{row.pid}</td>
                  <td className={tdStyle}>{row.name}</td>
                  <td className={tdStyle}>{row.details}</td>
                  <td className={tdStyle}>{row.total}</td>
                  <td className={tdStyle}>{row.date}</td>
                  <td className={tdStyle}>
                    <span className={`label label-${row.status}`}>
                      {statusText}
                    </span>
                  </td>
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


const Orders = () =>{

  const submitStyle = `mb-12 mt-4 flex flex-col justify-center items-center py-2 px-4 border border-transparent rounded-lg shadow-md text-md font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`;

  const [modalOpen, setModalOpen] = useState(false);
  const {rows, setRows} = useStateContext();
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl shadow-2xl">
    <div className='flex justify-between'>
        <Header title="Orders" />
        <button onClick={() => setModalOpen(true)} className={submitStyle}>
        Add Orders
      </button>
    </div> 
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
}

export default Orders;