import React from "react";
import Header from "./Header";
import {MdSpaceDashboard} from 'react-icons/md'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {BiPurchaseTag} from 'react-icons/bi'
import {FaSellsy} from 'react-icons/fa'
import {MdProductionQuantityLimits} from 'react-icons/md'
import {GoReport} from 'react-icons/go'
import {MdOutlineBackup} from 'react-icons/md'
import {FiSettings} from 'react-icons/fi'
import Dashboard from "./Dashboard";
import {Link } from "react-router-dom";

function Home() {
  
  return (
    <div>
      
      <div className="">
        <div className="">
          <div className="text-start">
            <div class="list-group ">
            <a href="#" className="list-group-item p-3 list-group-item-action">
              <MdSpaceDashboard/><Link className="text-decoration-none text-secondary" to='/dash-board'> Dashboard</Link> 
              </a>
              <a
                href="#"
                class="list-group-item p-3 list-group-item-action"
              >
              <RiCustomerService2Fill/>  Customer
              </a>
              <a href="#" className="list-group-item p-3 list-group-item-action">
               <BiPurchaseTag/> Purchase
              </a>
              <a href="#" className="list-group-item p-3 list-group-item-action">
               <FaSellsy/> Sale
              </a>
              <a href="#" className="list-group-item p-3 list-group-item-action">
              <MdProductionQuantityLimits/>  Products
              </a>
              <a href="#" className="list-group-item p-3 list-group-item-action">
              <GoReport/>  Reports
              </a>
              <a href="#" className="list-group-item p-3 list-group-item-action">
              <MdOutlineBackup/>  Backup/Restore
              </a>
              <a href="#" className="list-group-item p-3 list-group-item-action">
              <FiSettings/>  Settings
              </a>
            </div>

            
          </div>

          </div>
        </div>
        </div>

  );
}

export default Home;
