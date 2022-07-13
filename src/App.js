import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Registration from "./pages/Registretion"
import "./App.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<Registration />}></Route>
        {/* <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route> */}
      </Routes>
    </>
  )
}

export default App
