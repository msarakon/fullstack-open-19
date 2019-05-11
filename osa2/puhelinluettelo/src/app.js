import React, { useState } from 'react'
import PersonFilter from './person-filter'
import NewPersonForm from './new-person-form'
import PersonList from './person-list'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Martti Tienari', number: '040-123456' },
    { name: 'Arto Järvinen', number: '040-123456' },
    { name: 'Lea Kutvonen', number: '040-123456' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ filterText, setFilterText ] = useState('')

  const addNewPerson = (event) => {
    event.preventDefault()
    if (persons.filter(person => person.name === newName).length > 0) {
      alert(`${newName} on jo luettelossa`)
    } else {
      setPersons(persons.concat({ name: newName, number: newPhone }))
      setNewName('')
      setNewPhone('')
    }
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handlePhoneChange = (event) => setNewPhone(event.target.value)
  const filter = (event) => setFilterText(event.target.value)

  return (
    <div>
      <h1>Puhelinluettelo</h1>
      <PersonFilter filterText={filterText} filter={(e) => filter(e)} />
      <h2>lisää uusi</h2>
      <NewPersonForm
        addNewPerson={(e) => addNewPerson(e)}
        newName={newName}
        handleNameChange={(e) => handleNameChange(e)}
        newPhone={newPhone}
        handlePhoneChange={(e) => handlePhoneChange(e)} />
      <h2>Numerot</h2>
      <PersonList persons={persons} filterText={filterText} />
    </div>
  )

}

export default App