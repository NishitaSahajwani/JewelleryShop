import React from "react";

const ReadOnlyRow = ({ s, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{s.product}</td>
      <td>{s.price}</td>
      <td>{s.unit}</td>
      <td>{s.quantity}</td>
      <td>{s.tax}</td>
      <td>{s.amount}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, s)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(s.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;