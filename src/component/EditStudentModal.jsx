import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const EditStudentModal = ({ isOpen, onRequestClose, student, onSave }) => {
  const [Std_name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Address, setAddress] = useState('');
  const [Semester, setSemester] = useState('');
  const [CourseID, setCourseID] = useState('');

  // Update state when the student prop changes
  useEffect(() => {
    if (student) {
      setName(student.Std_name || '');
      setEmail(student.Email || '');
      setAddress(student.Address || '');
      setSemester(student.Semester || '');
      setCourseID(student.CourseID || '');
    }
  }, [student]);

  const handleSave = () => {
    onSave({
      ...student,
      Std_name,
      Email,
      Address,
      Semester: parseInt(Semester, 10),
      CourseID: parseInt(CourseID, 10),
    });
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md mx-auto">
        <div className="bg-gradient-to-r from-green-400 to-blue-500 py-4 px-6">
          <h2 className="text-2xl font-bold text-white mb-4">Edit Student</h2>
        </div>
        <div className="p-6 max-h-96 overflow-y-auto">
          <label className="block mb-4">
            <span className="text-gray-700">Name:</span>
            <input
              type="text"
              value={Std_name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Email:</span>
            <input
              type="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Address:</span>
            <input
              type="text"
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Semester:</span>
            <input
              type="number"
              value={Semester}
              onChange={(e) => setSemester(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">CourseID:</span>
            <input
              type="number"
              value={CourseID}
              onChange={(e) => setCourseID(e.target.value)}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <div className="flex justify-end mt-4">
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-all"
            >
              Save
            </button>
            <button
              onClick={onRequestClose}
              className="ml-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition-all"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditStudentModal;
