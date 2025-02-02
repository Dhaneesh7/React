 import React from "react";

const StudentCard = ({ student, onEdit, onDelete }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "15px",
        width: "200px",
        position: "relative",
      }}
    >
      {/* Edit & Delete Icons */}
      <div style={{ position: "absolute", top: "10px", right: "10px" }}>
        <button onClick={() => onEdit(student)}>edit</button>
        <button onClick={() => onDelete(student.id)>delete</button>
      </div>

      <img
        src={student.image}
        alt={student.name}
        style={{ width: "100px", borderRadius: "50%" }}
      />
      <h3>{student.name}</h3>
      <p>{student.address}</p>
      <p>
        <strong>Class:</strong> {student.class}
      </p>
    </div>
  );
};

export default StudentCard;
