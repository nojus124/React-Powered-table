import React, { useState, useEffect } from 'react';
import { fetchData } from '../api/FetchApi.js';
import Modal from '../components/Modal.jsx';

const TableComponent = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [selectedItem, setSelectedItem] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    fetchData(page, size)
      .then(apiData => setData(apiData))
      .catch(error => console.error('Error fetching data:', error));
  }, [page, size]);
  const handlePreviousClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleMoreInfoClick = (item) => {
    setSelectedItem(item);
    setDialogOpen(true);
  };
  const handleNextClick = () => {
    setPage(page + 1);
  };
  const handleSizeChange = event => {
    const newSize = parseInt(event.target.value);
    setSize(newSize);
  };
 const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedItem(null);
  };
  return (
    <div className="max-w-screen-md mx-auto p-4">
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <tr>
            <th className="py-3 px-6 text-left">First Name</th>
            <th className="py-3 px-6 text-left">Last Name</th>
            <th className="py-3 px-6 text-left"></th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {data.map((item, index) => (
            <tr key={index}>
              <td className="py-3 px-6 border-b border-gray-200">{item.firstName}</td>
              <td className="py-3 px-6 border-b border-gray-200">{item.lastName}</td>
              <td className="py-3 px-6 border-b border-gray-200">
                <div className="select-none w-fit cursor-pointer active:bg-gray-600 active:text-white px-3 py-2 border border-gray-200" onClick={() => handleMoreInfoClick(item)}>
                  More information
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <div className="space-x-3">
        <button onClick={handlePreviousClick} disabled={page === 1} className="select-none cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Previous
        </button>
        <button onClick={handleNextClick} className="select-none cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Next
        </button>
        </div>
        <div>
        <input
          type="number"
          value={size}
          onChange={handleSizeChange}
          className="w-20 border rounded px-2 py-1"
        />
        </div>
      </div>
      <Modal open={dialogOpen} onClose={handleCloseDialog} selectedItem={selectedItem} />
    </div>
  );
};

export default TableComponent;