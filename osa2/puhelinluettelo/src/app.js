import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addNewPerson = (event) => {
    event.preventDefault()
    setPersons(persons.concat({ name: newName }))
    setNewName('')
  }

  const handleNameChange = (event) => setNewName(event.target.value)

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form onSubmit={addNewPerson}>
        <div>
          nimi: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      {
        persons.map(person => {
          return <div key={person.name}>{person.name}</div>
        })
      }
    </div>
  )

}

export default App