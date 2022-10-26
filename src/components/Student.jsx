import React from "react";

const Student = (props) => {
  const { name, notes, avg } = props;

  return (
    <ul>
      <li>{name} - Note: {avg(notes) || 'N/A'}</li>
    </ul>
  )
};

export default Student;
