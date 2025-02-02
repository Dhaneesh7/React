 import React, { useState } from "react";
import StudentCard from "./StudentCard";
import EditForm from "./EditForm";

const Students = [
  {
    id: 1,
    name: "dhaneesh",
    address: "Thrissur",
    class: "bca",
    image: "#",
  },
  {
    id: 2,
    name: "adarsh",
    address: "Thrissur",
    class: "bca",
    image: "#",
  },
  {
    id: 3,
    name: "Sonu",
    address: "shornur",
    class: "bca",
    image: "#",
  },
  {
    id: 4,
    name: "Bhadran",
    address: "Thrissur",
    class: "bcà",
    image: "#",
  },
];

const StudentList = () => {
  const [students, setStudents] = useState(Students);
  const [editingStudent, setEditingStudent] = useState(null);

  // Handle Edit Click
  const handleEdit = (student) => {
    setEditingStudent(student);
  };

  // Handle Delete Click
  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents(
      students.map((student) =>
        student.id === editingStudent.id ? editingStudent : student
      )
    );
    setEditingStudent(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Student Cards */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {/* Edit Form */}
      <EditForm
        editingStudent={editingStudent}
        setEditingStudent={setEditingStudent}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default StudentList;
