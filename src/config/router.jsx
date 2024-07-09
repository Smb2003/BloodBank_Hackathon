import React from "react";
import {Route, createBrowserRouter,RouterProvider,createRoutesFromElements } from "react-router-dom";
import Student from "../component/Student";
import StudentForm from "../component/StudentForm";
import StudentList from "../component/StudentList";
import { Home } from "../component/Home";
import StudentSearch from "../component/SearchStudents";
import AddCourse from "../component/AddCourse";
import Course from "../component/Courses";

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='' element={<Home/>}/>
        <Route path='/Students' element={<StudentList/>}/>
        <Route path='/Add-student' element={<StudentForm/>}/>
        <Route path='/Add-course' element={<AddCourse/>}/>
        <Route path='/Course' element={<Course/>}/>
        <Route path='/Students/:id' element={<Student/>}/>
        <Route path='/Students/search' element={<StudentSearch/>}/>
      </Route> 
    )
)

export const New_Router = () => {
    return(
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}