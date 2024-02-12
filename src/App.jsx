import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import PrivateRoutes from './components/PrivateRoutes'
import Dashbord from './pages/Dashbord'
import './App.css'





export default function App() {

 

  return (

    <BrowserRouter>

      <Routes>

        <Route element={<PrivateRoutes/>}>

          <Route path="/home" element={<Dashbord/>} />

        </Route>

        <Route path="/" element={<Login/>}/>

      </Routes>
    </BrowserRouter>
  )
}
 