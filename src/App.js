import "./App.css"
import React from "react"
import NameForm from "./components/NameForm"
import EssayForm from "./components/EssayForm"
import FlavorForm from "./components/FlavorForm"

function App() {
  return (
    <div className="App">
      <NameForm />
      <EssayForm />
      <FlavorForm />
    </div>
  )
}

export default App
