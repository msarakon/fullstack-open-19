import React from 'react'

const NewPersonForm = (props) => {

  return (
    <form onSubmit={props.addNewPerson}>
      <div>
        nimi: <input value={props.newName} onChange={props.handleNameChange} />
      </div>
      <div>
        numero: <input value={props.newPhone} onChange={props.handlePhoneChange} />
      </div>
      <div>
        <button type="submit">lisää</button>
      </div>
    </form>
  )

}

export default NewPersonForm