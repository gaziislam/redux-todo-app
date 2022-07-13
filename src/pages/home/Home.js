import React from "react"
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
          <Button>Log in</Button>
          <Button>Register</Button>
        </ButtonGroup>
      </div>
    </div>
  )
}

export default Home
