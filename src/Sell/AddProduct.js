import React, { Fragment, useState } from "react";
import data from "./mock-data.json";
import { nanoid } from "nanoid";
import { Button } from "@mui/material";
import Submit from "./Submit";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { FaRegEdit } from "react-icons/fa";
import ReadOnlyRow from "./ReadOnlyTable";
import EditTableData from "./EditTableData";

function AddProduct() {
  const [dataList, setDataList] = useState(data);
  const [addData, setAddData] = useState({
    product: "",
    price: "",
    unit: "",
    quantity: "",
    tax: "",
    amount: "",
  })

  const handleAddData = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...addData };
    newFormData[fieldName] = fieldValue;

    setAddData(newFormData)
  };

  const SubmitData = (e) => {
    e.preventDefault();

    const newData = {
      id: nanoid(),
      product: addData.product,
      price: addData.price,
      unit: addData.unit,
      quantity: addData.quantity,
      tax: addData.tax,
      amount: addData.amount,
    };

    const newDatas = [...dataList, newData];
    setDataList(newDatas);
  };


  const [editFormData, setEditFormData] = useState({
    product: "",
    price: "",
    unit: "",
    quantity: "",
    tax: "",
    amount: "",
  });

  const [editDataId, setEditDataId] = useState(null);

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedData = {
      product: editFormData.product,
      price: editFormData.price,
      unit: editFormData.unit,
      quantity: editFormData.quantity,
      tax: editFormData.tax,
      amount: editFormData.amount,
    };

    const editDatas = [...dataList];

    const index = dataList.findIndex((value) => value.id === editDataId);

    editDatas[index] = editedData;

    setDataList(editDatas);
    setEditDataId(null);
  };

  const handleEditClick = (event, value) => {
    event.preventDefault();
    setEditDataId(value.id);

    const formValues = {
    product: value.product,
    price:value.price,
    unit:value.unit,
    quantity:value.quantity,
    tax:value.tax,
    amount:value.amount
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditDataId(null);
  };

  const handleDeleteClick = (itemID) => {
    const newList = [...dataList];

    const index = dataList.findIndex((v) => v.id === itemID);

    newList.splice(index, 1);

    setDataList(newList);
  };

  
  return (
    <div>
      <div className="pt-5">
        <form onSubmit={SubmitData}>
          <div className="d-flex py-3 justify-content-evenly">
            <input className="input-field" name="product" type="text" onChange={handleAddData} placeholder="product Name"></input>
            <input className="input-field" name="price" type="number" onChange={handleAddData} placeholder="price"></input>
            <input className="input-field" name="unit" type="number" onChange={handleAddData} placeholder="unit"></input>
           </div>
           
            <div className="d-flex py-3 justify-content-evenly">
            <input className="input-field" name="quantity" type="number" onChange={handleAddData} placeholder="quantity"></input>
            <input className="input-field " name="tax" type="number" onChange={handleAddData} placeholder="tax"></input>
            <input className="input-field" name="amount" type="number" onChange={handleAddData} placeholder="amount"></input>
          </div>

          <div className="row">
            <div className="col-10 mx-auto">
              <div className="d-flex py-3 justify-content-end">
                <Button sx={{}} type="button" variant="outlined">
                  Add Product
                </Button>
                {/* <button className='btn btn-outline-primary' type='submit'>Submit</button> */}
              </div>
            </div>
          </div>
        </form>

        <div className="row">
          <div className="pt-5 col-11 mx-auto">
            <form onSubmit={handleEditFormSubmit}>
            <table className="table table-primary">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price/Unit</th>
                  <th scope="col">Unit</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Tax</th>
                  <th scope="col">Amount</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {dataList.map((s) => {
                  <Fragment>
                    {editDataId === s.id ? (
                       <EditTableData
                       editFormData={editFormData}
                       handleEditFormChange={handleEditFormChange}
                       handleCancelClick={handleCancelClick}
                     />
                ):(
                  <ReadOnlyRow
                  s={s}
                  handleEditClick={handleEditClick}
                  handleDeleteClick={handleDeleteClick}
                />
                )
                     
                    }
                
      
                  </Fragment>
                })}
                 {/* <tr>
                    <td>product</td>
                    <td>price</td>
                    <td>unit</td>
                    <td>quantity</td>
                    <td>tax</td>
                    <td>amount</td>
                    <td><RiDeleteBin6Line color="crimson"/></td>
                    <td><FaRegEdit color="green"/></td>
                  </tr> */}
              </tbody>
            </table>
            </form>
          </div>
        </div>
        <div className="d-flex pt-2 flex-column align-items-end col-11">
          <p>Total :</p>
          <p>Recieved Amount :</p>
        </div>
        <Submit />
      </div>
    </div>
  );
}

export default AddProduct;
