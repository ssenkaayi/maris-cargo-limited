import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'


// import loginPage from './pages/loginPage'

export default function App() {
  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>

      </Routes>
    </BrowserRouter>
  )
}
 