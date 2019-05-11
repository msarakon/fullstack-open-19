import React from 'react'
import Person from './person'

const PersonList = ({ persons, filterText }) => {

  return (
    <div>
      {
        persons
          .filter(person => person.name.toLowerCase().includes(filterText.toLowerCase()))
          .map(person => <Person key={person.name} person={person} />)
      }
    </div>
  )

}

export default PersonList