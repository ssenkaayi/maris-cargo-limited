import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import PrivateRoutes from './components/PrivateRoutes'



export default function App() {
  return (

    <BrowserRouter>

      <Routes>

        

        <Route element={<PrivateRoutes/>}>

          <Route path="/" element={<Home/>} />

        </Route>

        <Route path="/login" element={<Login/>}/>

      </Routes>
    </BrowserRouter>
  )
}
 