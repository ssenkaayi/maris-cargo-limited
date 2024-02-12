import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import PrivateRoutes from './components/PrivateRoutes'
import Dashbord from './pages/Dashbord'
import Profile from './pages/Profile'
import './App.css'
import Orders from './pages/Orders'
import Employes from './pages/Employes'
import Luggages from './pages/Luggages'
import Payments from './pages/Payments'
import Settings from './pages/Settings'





export default function App() {

 

  return (

    <BrowserRouter>

      <Routes>

        <Route element={<PrivateRoutes/>}>

          <Route path="/home" element={<Dashbord/>} >

            <Route path='' element = {<Dashbord/>}/>
            <Route path='/home/profile'  element = {<Profile/>}/>
            <Route path='/home/employes' element = {<Employes/>}/>
            <Route path='/home/luggages' element = {<Luggages/>}/>
            <Route path='/home/payments' element = {<Payments/>}/>
            <Route path='/home/orders'   element = {<Orders/>}/>
            <Route path='/home/settings' element = {<Settings/>}/>

          </Route>

        </Route>

        <Route path="/" element={<Login/>}/>

      </Routes>
    </BrowserRouter>
  )
}
 