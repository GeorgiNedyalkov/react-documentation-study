import "./App.css"
import React from "react"
import NameForm from "./components/NameForm"
import EssayForm from "./components/EssayForm"
import FlavorForm from "./components/FlavorForm"
import Reservation from "./components/Reservation"

function App() {
  return (
    <div className="App">
      <NameForm />
      <EssayForm />
      <FlavorForm />
      <Reservation />
    </div>
  )
}

export default App
