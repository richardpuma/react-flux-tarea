import React, { useState, useEffect } from "react";
import courseStore from "../stores/courseStore";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import { loadCourses, deleteCourse } from "../actions/courseActions";
import { loadProfessors } from "../actions/professorActions";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    return () => courseStore.removeChangeListener(onChange); // cleanup on unmount (navigate to a different page)
  }, []);

  function onChange() {
    //debugger;
    setCourses(courseStore.getCourses());
    setProfessors(courseStore.getProfessors());
  }


  const [professors, setProfessors] = useState(courseStore.getProfessors());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getProfessors().length === 0) loadProfessors();
    return () => courseStore.removeChangeListener(onChange); // cleanup on unmount (navigate to a different page)
  }, []);

 

  return (
    <><h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} deleteCourse={deleteCourse} />
      <CourseList professors={professors} deleteCourse={deleteCourse} />
    </>
  );
}



export default CoursesPage;
