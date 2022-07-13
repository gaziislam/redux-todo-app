import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Registration from "./pages/Registretion"
import "./App.css"
import Login from "./pages/Login"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="register" element={<Registration />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default App
