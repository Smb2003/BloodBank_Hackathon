import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
                <h1 className='py-5 px-2 text-gray-500 font-semibold text-xl hover:text-green-500 transition duration-300"'>STUDENT MANAGEMENT SYSTEM</h1>
                <div className="hidden md:flex items-center space-x-1">
                    <Link to="/Add-student" className="py-4 px-2 text-gray-500 font-semibold active:hover:text-green-500 transition duration-300  hover:border-b-4 hover:border-green-500">Add Student</Link>
                    <Link to="/Course" className="py-4 px-2 text-gray-500 hover:border-b-4 hover:border-green-500 font-semibold">Course List</Link>
                    <Link to="/Add-course" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 hover:border-b-4 hover:border-green-500">Add Course</Link>
                    <Link to="/Students" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 hover:border-b-4 hover:border-green-500">Student List</Link>
                    <Link to="/Students/search" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 hover:border-b-4 hover:border-green-500">Search Student</Link>
                </div>

                <div className="hidden mobile-menu">
                    <ul className="">
                    <Link to="/Add-student" className="py-4 px-2 text-gray-500 font-semibold active:hover:text-green-500 transition duration-300  hover:border-b-4 hover:border-green-500">Add Student</Link>
                    <Link to="/Course" className="py-4 px-2 text-gray-500 hover:border-b-4 hover:border-green-500 font-semibold">Course List</Link>
                    <Link to="/Add-course" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 hover:border-b-4 hover:border-green-500">Add Course</Link>
                    <Link to="/Students" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 hover:border-b-4 hover:border-green-500">Student List</Link>
                    <Link to="/Students/search" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 hover:border-b-4 hover:border-green-500">Search Student</Link>
                    </ul>
                </div>

            
                <div className="md:hidden flex items-center">
                    <button className="outline-none mobile-menu-button">
                    <svg
                    className="w-6 h-6 text-gray-500"
                    x-show="!showMenu"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                    </button>
                </div>

            
                <div className="hidden md:flex items-center space-x-3 ">
                    {/* <Link to="/LoginPage" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Login</Link> */}
                </div>
            </div>
        </div>
    </nav>
    </>
)}
export default Navbar;