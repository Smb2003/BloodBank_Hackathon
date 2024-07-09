import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditCourseModal from './EditCourseModal'; // Adjust the import path as necessary

const Course = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/GetCourses');
        console.log(response.data.result);
        setCourses(response.data.result);
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

  // Group courses by semester
  const semesterGroups = {};
  courses.forEach((course) => {
    if (!semesterGroups[course.Semester]) {
      semesterGroups[course.Semester] = [];
    }
    semesterGroups[course.Semester].push(course);
  });

  const onEdit = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const onSave = async (updatedCourse) => {
    try {
      await axios.put(`http://localhost:3000/UpdateCourse/${updatedCourse.CourseID}`, updatedCourse);
      setCourses((prevCourses) =>
        prevCourses.map((course) =>
          course.CourseID === updatedCourse.CourseID ? updatedCourse : course
        )
      );
      setIsModalOpen(false);
    } catch (error) {
      setError(error);
    }
  };

  const onDelete = async (course) => {
    try {
      await axios.delete(`http://localhost:3000/DeleteCourse/${course.CourseID}`);
      setCourses((prevCourses) => prevCourses.filter((c) => c.CourseID !== course.CourseID));
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-green-600">Course List</h2>
      {Object.keys(semesterGroups).map((semesterKey) => (
        <div key={semesterKey} className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-blue-600 text-center">Semester {semesterKey}</h3>
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-green-600">
                <tr>
                  <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">CourseID</th>
                  <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">Course Name</th>
                  <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">Semester</th>
                  <th className="px-6 py-3 text-xs font-medium text-white uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {semesterGroups[semesterKey].map((course) => (
                  <tr key={course.CourseID} className="hover:bg-blue-50 transition">
                    <td className="px-6 py-4 whitespace-nowrap text-center">{course.CourseID}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">{course.CourseName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">{course.Semester}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <button
                        onClick={() => onEdit(course)}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => onDelete(course)}
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
      {selectedCourse && (
        <EditCourseModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          course={selectedCourse}
          onSave={onSave}
        />
      )}
    </div>
  );
};

export default Course;
