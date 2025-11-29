import { useState } from 'react'
import caterflowLogo from '/caterflow-white.svg'
import './App.css'
import {Route, Routes, Navigate} from "react-router-dom"

import { Login } from "@/pages/Login"
import Dashboard from "@/pages/dashboard"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      
    </div>
  )
}

export default App
