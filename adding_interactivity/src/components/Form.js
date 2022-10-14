import React, { useState } from "react"

const Form = () => {
  const [pet, setPet] = useState({
    name: "Bronco",
    species: "Canine",
    mouth: {
      teeth: 30,
      tongue: "small",
    },
  })

  function handleChange(e) {
    setPet({
      ...pet,
      [e.target.name]: e.target.value,
    })
  }

  function handleBreakTeeth(e) {
    setPet({
      ...pet,
      mouth: {
        ...pet.mouth,
        teeth: 25,
      },
    })
  }

  return (
    <>
      <form>
        <label>
          name: {pet.name}
          <input name="name" value={pet.name} onChange={handleChange} />
        </label>
        <label>
          Species: {pet.species}
          <input name="species" value={pet.species} onChange={handleChange} />
        </label>
      </form>
      <p>
        {pet.name} is a {pet.species}
      </p>
      <button onClick={handleBreakTeeth}>Break his teeth</button>
      <p>{pet.mouth.teeth}</p>
    </>
  )
}

export default Form
