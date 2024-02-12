import React from 'react'
import { Outlet } from 'react-router-dom'

function Base() {
  return (
    
    <div className='relative bg-teal-50 w-full p-4'>

      <div 
        className='flex justify-between items-center flex-wrap
        bg-white rounded-2x p-header my-4'>

        <div className=''>
          
          <span>Admin</span>
          <h2>Dashbord</h2>
  
        </div>

        <div>

          <div>
            <i className='fa-solid'></i>
            <input type='text' placeholder='search'/>
          </div>
          <img src='../images/blank-profile-picture-973460' alt='avater'/>

        </div>

        <div>

         

        </div>
      
      </div>

      <Outlet/>

    
    
    </div>

  )
}

export default Base