import React from "react"
import { Link } from "react-router-dom"
import "./home.css"

import ButtonGroup from "@mui/material/ButtonGroup"
import Button from "@mui/material/Button"

const Home = () => {
  return (
    <div className="bg">
      <div className="container">
        <h1>Welcome to My ToDo App</h1>

        <ButtonGroup
          className="home-button"
          disableElevation
          variant="contained"
        >
          <Link to="/login">
            <Button>Login</Button>
          </Link>

          <Link to="/register">
            <Button>Register</Button>
          </Link>
        </ButtonGroup>
      </div>
    </div>
  )
}

export default Home
