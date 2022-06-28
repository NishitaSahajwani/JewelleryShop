import { Table } from '@mui/material'
import React from 'react'
import AddProduct from './AddProduct'
import './Sell.css'
// import CustomizedTables from './Table'

export default function Sell() {
    const today = new Date()
  return (
    <div className='container py-3 main-div'>
        <div className='row'>
            <div className='col-10 mx-auto'>
        <div className='d-flex justify-content-between align-items-end'>
      <h2 className='fs-1 fw-bold heading'>Sell</h2>
      <p className='fs-4 fw-bolder'>Date: {today.getDate()+ " - " + (today.getMonth()+1) + " - " + today.getFullYear()}</p>
    </div>
    
    </div>
    </div>
    <AddProduct/>
    {/* <CustomizedTables/> */}
    </div>
  )
}
