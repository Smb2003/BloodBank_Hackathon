import React, { useState } from 'react';

const Student = () => {
  const [student, setStudent] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    grade: '',
    courses: [],
    attendance: [],
    grades: []
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudent((prevStudent) => ({...prevStudent, [name]: value }));
  };

  const addCourse = (course) => {
    setStudent((prevStudent) => ({...prevStudent, courses: [...prevStudent.courses, course] }));
  };

  const addAttendance = (attendance) => {
    setStudent((prevStudent) => ({...prevStudent, attendance: [...prevStudent.attendance, attendance] }));
  };

  const addGrade = (grade) => {
    setStudent((prevStudent) => ({...prevStudent, grades: [...prevStudent.grades, grade] }));
  };

  return (
    <div class="max-w-md mx-auto p-4 bg-white shadow-md rounded">
  <h2 class="text-2xl font-bold mb-4">Student Information</h2>
  <form>
    <label class="block mb-2">
      <span class="text-gray-700">ID:</span>
      <input
        type="text"
        name="id"
        value={student.id}
        onChange={handleInputChange}
        class="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded"
      />
    </label>
    <label class="block mb-2">
      <span class="text-gray-700">Name:</span>
      <input
        type="text"
        name="name"
        value={student.name}
        onChange={handleInputChange}
        class="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded"
      />
    </label>
    <label class="block mb-2">
      <span class="text-gray-700">Email:</span>
      <input
        type="email"
        name="email"
        value={student.email}
        onChange={handleInputChange}
        class="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded"
      />
    </label>
    <label class="block mb-2">
      <span class="text-gray-700">Phone:</span>
      <input
        type="tel"
        name="phone"
        value={student.phone}
        onChange={handleInputChange}
        class="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded"
      />
    </label>
    <label class="block mb-2">
      <span class="text-gray-700">Address:</span>
      <input
        type="text"
        name="address"
        value={student.address}
        onChange={handleInputChange}
        class="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded"
      />
    </label>
    <label class="block mb-2">
      <span class="text-gray-700">Grade:</span>
      <input
        type="text"
        name="grade"
        value={student.grade}
        onChange={handleInputChange}
        class="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded"
      />
    </label>
    <h3 class="text-lg font-bold mb-2">Courses</h3>
    <ul class="list-none mb-2">
      {student.courses.map((course, index) => (
        <li key={index} class="text-gray-700">{course}</li>
      ))}
    </ul>
    <input
      type="text"
      placeholder="Add course"
      class="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded"
    />
    <button
      class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => addCourse(document.querySelector('input[type="text"]').value)}
    >
      Add Course
    </button>
    <h3 class="text-lg font-bold mb-2">Attendance</h3>
    <ul class="list-none mb-2">
      {student.attendance.map((attendance, index) => (
        <li key={index} class="text-gray-700">{attendance}</li>
      ))}
    </ul>
    <input
      type="text"
      placeholder="Add attendance"
      class="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded"
    />
    <button
      class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => addAttendance(document.querySelector('input[type="text"]').value)}
    >
      Add Attendance
    </button>
    <h3 class="text-lg font-bold mb-2">Grades</h3>
    <ul class="list-none mb-2">
      {student.grades.map((grade, index) => (
        <li key={index} class="text-gray-700">{grade}</li>
      ))}
    </ul>
    <input
      type="text"
      placeholder="Add grade"
      class="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded"
    />
    <button
      class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => addGrade(document.querySelector('input[type="text"]').value)}
    >
      Add Grade
        </button>
      </form>
    </div>
  );
};

export default Student;