import React from 'react'
import Person from './person'

const PersonList = ({ persons, filterText, removePerson }) => {

  return (
    <div>
      {
        persons
          .filter(person => person.name.toLowerCase().includes(filterText.toLowerCase()))
          .map(person =>
            <Person key={person.name} person={person} remove={(p) => removePerson(p)} />
          )
      }
    </div>
  )

}

export default PersonList