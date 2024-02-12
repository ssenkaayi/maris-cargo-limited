import React from 'react'

function Navbar() {
  return (
    
    <div 

        className='flex justify-between items-center flex-wrap
        bg-white rounded-2x p-header mb-4 my-2 rounded-lg '>

        <div className='flex flex-col  text-dashbord '>
        
            <span className='test-xs'>Admin</span>
            <span className='text-2xl' >Dashbord</span>

        </div>

    
        <div className='flex items-center gap-1'>

            <div className=' bg-search-bar'>
                <i className='fa-solid'></i>
                <input className='bg-transperent text-dashbord p-2.5' type='text' placeholder='search'/>
            </div>

            <img className='w-12 h-12 cursor-pointer rounded-full' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' alt='avater'/>
        </div>


    </div>

  )
}

export default Navbar