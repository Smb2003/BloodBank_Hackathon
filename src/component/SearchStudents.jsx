import axios from 'axios';
import React, { useState } from 'react';

const StudentSearch = () => {
  const [className, setClassName] = useState('');
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('http://localhost:3000/students/search', {
        params: { class: className }
      });
      setStudents(response.data.results);
    } catch (error) {
      setError(error.response?.data?.message || 'Error fetching data');
      setStudents([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-4xl font-bold text-center mb-8 text-green-600">Search Students by Semester</h2>
      <div className="mb-8 text-center">
        <input
          type="text"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          placeholder="Enter Class"
          className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          onClick={handleSearch}
          className="bg-green-500 text-white px-4 py-2 rounded-r hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition"
        >
          Search
        </button>
      </div>
      {loading && <div className="text-center py-8">Loading...</div>}
      {error && <div className="text-center py-8 text-red-500">Error: {error}</div>}
      {students.length > 0 && (
        <div className="overflow-x-auto flex justify-center">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-green-500 text-white">
              <tr>
                <th className="py-4 px-6 uppercase font-semibold text-sm text-center">Roll No</th>
                <th className="py-4 px-6 uppercase font-semibold text-sm text-center">Name</th>
                <th className="py-4 px-6 uppercase font-semibold text-sm text-center">Email</th>
                <th className="py-4 px-6 uppercase font-semibold text-sm text-center">Address</th>
                <th className="py-4 px-6 uppercase font-semibold text-sm text-center">CourseID</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {students.map((student) => (
                <tr key={student.ID} className="hover:bg-green-100 transition">
                  <td className="py-4 px-6 text-center border-b">{student.Rollno}</td>
                  <td className="py-4 px-6 text-center border-b">{student.Std_name}</td>
                  <td className="py-4 px-6 text-center border-b">{student.Email}</td>
                  <td className="py-4 px-6 text-center border-b">{student.Address}</td>
                  <td className="py-4 px-6 text-center border-b">{student.CourseID}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StudentSearch;
