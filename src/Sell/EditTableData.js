import React from "react";

const EditTableData = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
    <td>
      <input
        type="text"
        placeholder="Product"
        name="product"
        value={editFormData.product}
        onChange={handleEditFormChange}
      ></input>
    </td>
    <td>
      <input
        type="number"
        
        placeholder="Price"
        name="price"
        value={editFormData.price}
        onChange={handleEditFormChange}
      ></input>
    </td>
    <td>
      <input
        type="number"
        placeholder="unit"
        name="unit"
        value={editFormData.unit}
        onChange={handleEditFormChange}
      ></input>
    </td>
    <td>
      <input
        type="number"
    
        placeholder="Quantity"
        name="quantity"
        value={editFormData.quantity}
        onChange={handleEditFormChange}
      ></input>
    </td>
    <td>
      <input
        type="number"
    
        placeholder="Tax"
        name="tax"
        value={editFormData.tax}
        onChange={handleEditFormChange}
      ></input>
    </td>
    <td>
      <input
        type="number"
    
        placeholder="Amount"
        name="amount"
        value={editFormData.amount}
        onChange={handleEditFormChange}
      ></input>
    </td>
    <td>
      <button type="submit">Save</button>
      <button type="button" onClick={handleCancelClick}>
        Cancel
      </button>
    </td>
  </tr>
  );
};

export default EditTableData;