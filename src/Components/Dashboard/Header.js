import React from 'react'
// import {GiJewelCrown} from 'react-icons/gi'
import './Header.css'
import {IoPersonCircleOutline} from 'react-icons/io5'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <nav class="navbar fixed-top navbar-expand-md navbar-light bg-faded">
  <div class="container-fluid">
    <a class="navbar-brand " href="#">
      <h1 className=''>Shop Name</h1>
    </a>
    <div className=''>
<Link to="/profile"><div type="button" className="" data-bs-toggle="modal" data-bs-target="#exampleModal">
<IoPersonCircleOutline size={70} color="black"/>
</div></Link>
    </div>
  </div>
</nav>
{/* <div class="container-fluid bgimg"></div> */}
    </>
  )
}

export default Header
