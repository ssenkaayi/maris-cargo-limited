import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const[employData,setEmployData] = useState({})
  const navigate = useNavigate();

  const handleEmployeData = (e)=>{

    setEmployData(

      {...employData,
        [e.target.id]:e.target.value,})
    }

    //linking our api to send req to the server
    const handleSubmit = async(e)=>{
    
      e.preventDefault();

      try{
        // dispatch(signInStart())
        //making a request to the server
        const res = await fetch('/api/users/loginUser',{

          method:'POSt',
          headers:{'content-type':'application/json',},
          body:JSON.stringify(employData)

        }
        );
        //getting response from the server
        const data =  await res.json();
        navigate('/home')
        // console.log(data)
        
  
        //if response is false, show the error message to the client
        // if(data.success===false){
        //   dispatch(signInFailure(data.message));
        //   return;
        // }
  
        //if response is True, register and navigate to the sign in page
       
       
       
        // dispatch(signInSuccess(data));
        // navigate('/')
  
      }catch(error){
        // dispatch(signInFailure(error.message))
        console.log(error.message)
      } 
    }

  // handleEmployeData()

  // console.log(employData)

  return (
    
 

      <div className='p-3 max-w-lg mx-auto my-7 mt-30'>

        

        <form className='flex flex-col gap-4' >

          < img className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2 my-7' 
            src="https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/" 
            alt="Avatar"
          />

          <h1 className='text-3xl text-center font-semibold my-7'>Login</h1>


          <div className='flex flex-col gap-4'>

            <label className='text-1xl font-semibold'>Email</label>
            <input type="email" placeholder="Enter email" id='email' className='border p-3 rounded-lg'
             required onChange={handleEmployeData}
             />

            <label className='text-1xl font-semibold'>Password</label>
            <input type="password" placeholder="Enter Password" id='password' 
            className='border p-3 rounded-lg' required 
            onChange={handleEmployeData}/>

            <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95' onClick={handleSubmit} type="submit">Login</button>


          </div>

          <div className='flex gap-2 mt-5'>
            
       


          </div>

        </form>

      </div>

    
  )
}
