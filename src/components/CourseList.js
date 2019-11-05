import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


function CourseList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Professor </th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        
           {props.courses.map(course => {
                 
         console.log(props);
          return (
       
            <tr key={course.id}>
      
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    //debugger;
                    if(window.confirm("Estas Seguro que Deseas Eliminarlo?")) props.deleteCourse(course.id);
                   
                  }}
                >
                  Delete
                </button>
              </td>
              <td>
                <Link to={"/course/" + course.slug}>{course.title}</Link>
              </td>
                 <td>{course.name}</td>
             <td>{course.category}</td>
            </tr>
          );
        })}

        
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  deleteCourse: PropTypes.func.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      professorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired
    })
  ).isRequired

 

};

CourseList.defaultProps = {

    courses: []
  
};

export default CourseList;