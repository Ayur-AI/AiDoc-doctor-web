import React from 'react'
import { useState } from 'react'
import { Avatar } from '@mui/material'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MedicationIcon from '@mui/icons-material/Medication';
import Logo from './ayurailogofull.png'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
function SideBar() {
    let [Showdropdown,hide]=useState(false)
    let navigate = useNavigate()
    let Show_dropdown=()=>{
        hide(!Showdropdown)
     }
       let data=sessionStorage.getItem("User_details")
       let User_details=JSON.parse(data)

    let Signout=()=>{
      sessionStorage.removeItem("User_details")
      sessionStorage.removeItem("AccessToken")
      sessionStorage.removeItem("refreshToken")
      sessionStorage.removeItem('companyid')
      if (!sessionStorage.getItem('AccessToken')) {
        navigate('/Login')
    }
    }
  return <>
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  <div className="px-3 py-3 lg:px-5 lg:pl-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start">
        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>
        <div className="flex ml-2 md:mr-24 ">
          <img src={Logo} className="h-10 mr-3" alt="Logo" />
          {/* <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">CRM</span> */}
        </div>
      </div>
      {/* <div className="flex items-center">
          <div className="flex items-center ml-3">
            <div>
              <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" onClick={Show_dropdown}>
                <span className="sr-only">Open user menu</span>
                <Avatar/>
              </button>
            </div>
            {Showdropdown &&
                <div className='drop-down'>
               <div className="z-50  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 drop-down-item">
              <div className="px-4 py-3" role="none">
                <p className="text-sm text-gray-900 dark:text-white" role="none">
                  {User_details.Name}
                </p>
                <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                 {User_details.Email}
                </p>
              </div>
              <ul className="py-1" role="none">
                <li>
                  <Link to='/' style={{textDecoration:"none"}} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</Link>
                </li>
                <li>
                  <div  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem" style={{cursor:'pointer'}} onClick={Signout}>Sign out</div>
                </li>
              </ul>
            </div>
            </div>}

          </div>
        </div> */}
    </div>
  </div>
</nav>

<aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
   <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
         <li>
            <Link to='/' style={{textDecoration:"none"}} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span className="ml-3">Dashboard</span>
            </Link>
         </li>
      
         <li>
            <Link to='/Add_Patient'style={{textDecoration:"none"}} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <PersonAddIcon className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor'/>
               <span className="ml-3">Add Patient</span>
            </Link>
         </li>
      </ul>
   </div>
</aside>
  </>
}

export default SideBar