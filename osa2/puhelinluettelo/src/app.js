import React, { useState, useEffect } from 'react'
import personService from './person-service'
import PersonFilter from './person-filter'
import NewPersonForm from './new-person-form'
import PersonList from './person-list'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ filterText, setFilterText ] = useState('')

  useEffect(() => {
    personService.list().then(persons => setPersons(persons))
  }, [])

  const addNewPerson = event => {
    event.preventDefault()
    const existingPerson = persons.find(person => person.name === newName)
    if (existingPerson) {
      if (window.confirm(`${newName} on jo luettelossa, korvataanko vanha numero uudella?`)) {
        personService
          .update(existingPerson.id, { name: newName, number: newPhone })
          .then(updatedPerson =>
            setPersons(persons.map(person =>
              person.id === updatedPerson.id ? updatedPerson : person 
            ))
          )
      }
    } else {
      personService
        .add({ name: newName, number: newPhone })
        .then(newPerson => setPersons(persons.concat(newPerson)))
      setNewName('')
      setNewPhone('')
    }
  }

  const removePerson = personToBeRemoved => {
    if (window.confirm(`Poistetaanko ${personToBeRemoved.name}?`)) {
      personService.remove(personToBeRemoved.id).then(() =>
        setPersons(persons.filter(person => person.id !== personToBeRemoved.id))
      )
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
      <PersonList persons={persons} filterText={filterText} removePerson={(p) => removePerson(p)}/>
    </div>
  )

}

export default App