import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditStudentModal from './EditStudentModal'; // Adjust the import path as necessary

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/Getstudent');
        console.log(response.data);
        setStudents(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error.message}</div>;
  }

  // Group students by semester
  const semesterGroups = {};
  students.forEach((student) => {
    if (!semesterGroups[student.Semester]) {
      semesterGroups[student.Semester] = [];
    }
    semesterGroups[student.Semester].push(student);
  });

  const onEdit = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const onSave = async (updatedStudent) => {
    try {
      await axios.put(`http://localhost:3000/Updatestudent/${updatedStudent.Rollno}`, updatedStudent);
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student.Rollno === updatedStudent.Rollno ? updatedStudent : student
        )
      );
      setIsModalOpen(false);
    } catch (error) {
      setError(error);
    }
  };

  const onDelete = async (student) => {
    try {
      await axios.delete(`http://localhost:3000/Deletestudent/${student.Rollno}`);
      setStudents((prevStudents) => prevStudents.filter((s) => s.Rollno !== student.Rollno));
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-green-600">Student List</h2>
      {Object.keys(semesterGroups).map((semesterKey) => (
        <div key={semesterKey} className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-blue-600 text-center">Semester {semesterKey}</h3>
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-green-600">
                <tr>
                  <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">Roll No</th>
                  <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">Address</th>
                  <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">CourseID</th>
                  <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {semesterGroups[semesterKey].map((student) => (
                  <tr key={student.ID} className="hover:bg-blue-50 transition">
                    <td className="px-6 py-4 whitespace-nowrap text-center">{student.Std_name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">{student.Rollno}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">{student.Email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">{student.Address}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">{student.CourseID}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <button
                        onClick={() => onEdit(student)}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => onDelete(student)}
                        className="ml-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
      {selectedStudent && (
        <EditStudentModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          student={selectedStudent}
          onSave={onSave}
        />
      )}
    </div>
  );
};

export default StudentList;
