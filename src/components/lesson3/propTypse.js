import React from "react";
import PropTypes from "prop-types";
function Student({ name, age, isStudent }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h3>{isStudent ? "Студент" : "Не студент"}</h3>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isStudent: PropTypes.bool,
};

export default Student;
