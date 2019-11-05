import React from "react";
import PropTypes from "prop-types";


function ProfessorList(props) {
  return (   
       <tbody>
      {props.professors.map (professor => {
         console.log(props);
          return (
            <tr key={professor.id}>
      
           
            <td>{professor.name}</td>
   
          </tr>     
            
            )
        })}
           

        
      </tbody>
   
  );
}

ProfessorList.propTypes = {
   professors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired, 

 

};

ProfessorList.defaultProps = {
  professors:[]
  
};

export default ProfessorList;