 import React from "react";

const EditForm = ({ editingStudent, setEditingStudent, onSubmit }) => {
  if (!editingStudent) return null;

  return (
    <form
      onSubmit={onSubmit}
      style={{
        marginTop: "20px",
        padding: "15px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        width: "300px",
      }}
    >
      <h3>Edit Student</h3>
      <input
        type="text"
        value={editingStudent.name}
        onChange={(e) =>
          setEditingStudent({ ...editingStudent, name: e.target.value })
        }
        placeholder="Name"
        required
        style={{ width: "100%", marginBottom: "10px", padding: "5px" }}
      />
      <input
        type="text"
        value={editingStudent.address}
        onChange={(e) =>
          setEditingStudent({ ...editingStudent, address: e.target.value })
        }
        placeholder="Address"
        required
        style={{ width: "100%", marginBottom: "10px", padding: "5px" }}
      />
      <input
        type="text"
        value={editingStudent.class}
        onChange={(e) =>
          setEditingStudent({ ...editingStudent, class: e.target.value })
        }
        placeholder="Class"
        required
        style={{ width: "100%", marginBottom: "10px", padding: "5px" }}
      />
      <button type="submit">Save</button>
      <button onClick={() => setEditingStudent(null)} type="button">
        Cancel
      </button>
    </form>
  );
};

export default EditForm;
