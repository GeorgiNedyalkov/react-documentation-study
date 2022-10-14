import "./App.css"
import { useState } from "react"
import Form from "./components/Form"

export default function App() {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhep@gmail.com",
  })

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value,
    })
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value,
    })
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value,
    })
  }

  return (
    <>
      <form>
        <label>
          Firstname:
          <input
            type="text"
            value={person.firstName}
            onChange={handleFirstNameChange}
          />
        </label>

        <label>
          LastName:
          <input
            type="text"
            value={person.lastName}
            onChange={handleLastNameChange}
          />
        </label>
        <label>
          Email: {""}
          <input
            type="text"
            value={person.email}
            onChange={handleEmailChange}
          />
        </label>
        <p>
          {person.firstName} {person.lastName} {person.email}
        </p>
      </form>
      <Form />
    </>
  )
}
