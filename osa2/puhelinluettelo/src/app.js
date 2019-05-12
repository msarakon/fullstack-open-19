import React, { useState, useEffect } from 'react'
import personService from './person-service'
import PersonFilter from './person-filter'
import NewPersonForm from './new-person-form'
import PersonList from './person-list'
import Notification from './notification'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ filterText, setFilterText ] = useState('')
  const [ notification, setNotification ] = useState({ msg: '', style: null })

  useEffect(() => {
    personService.list().then(persons => setPersons(persons))
  }, [])

  const showNotification = msg => {
    setNotification({ msg: msg, style: null })
    setTimeout(() => setNotification({ msg: '', style: null }), 2000)
  }

  const showError = msg => {
    setNotification({ msg: msg, style: 'error' })
    setTimeout(() => setNotification({ msg: '', style: null }), 2000)
  }

  const addNewPerson = event => {
    event.preventDefault()
    const existingPerson = persons.find(person => person.name === newName)
    if (existingPerson) {
      if (window.confirm(`${newName} on jo luettelossa, korvataanko vanha numero uudella?`)) {
        personService
          .update(existingPerson.id, { name: newName, number: newPhone })
          .then(updatedPerson => {
            setPersons(persons.map(person =>
              person.id === updatedPerson.id ? updatedPerson : person 
            ))
            showNotification(`Muutettiin henkilön ${newName} puhelinnumeroa`)
          })
      }
    } else {
      personService
        .add({ name: newName, number: newPhone })
        .then(newPerson => setPersons(persons.concat(newPerson)))
        .catch(error => showError(`${newName} on jo poistettu`))
      showNotification(`Lisättiin ${newName}`)
      setNewName('')
      setNewPhone('')
    }
  }

  const removePerson = personToBeRemoved => {
    if (window.confirm(`Poistetaanko ${personToBeRemoved.name}?`)) {
      personService.remove(personToBeRemoved.id).then(() => {
        setPersons(persons.filter(person => person.id !== personToBeRemoved.id))
        showNotification(`Poistettu ${personToBeRemoved.name}`)
      }).catch(error => showError(`${personToBeRemoved.name} on jo poistettu`))
    }
  }

  const handleNameChange = (event) => setNewName(event.target.value)
  const handlePhoneChange = (event) => setNewPhone(event.target.value)
  const filter = (event) => setFilterText(event.target.value)

  return (
    <div>
      <h1>Puhelinluettelo</h1>
      <Notification message={notification.msg} style={notification.style} />
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