import React from 'react'
import {Button} from '@mui/material'

export default function Submit() {
  return (
    <div>
        <div className='pt-5 row'>
        <div className='col-11 d-flex justify-content-end mx-auto'>
            <div className='ps-2'>
      <Button style={{backgroundColor : 'lightblue'}} variant="contained">Save</Button>

            </div>
            <div className='ps-2'>
      <Button variant="contained">Cancel</Button>
      </div>
      </div>
      </div>
    </div>
  )
}
