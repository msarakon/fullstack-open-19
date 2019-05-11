import React from 'react'

const PersonFilter = ({ filterText, filter }) => {

  return (
    <div>
      rajaa näytettäviä: <input value={filterText} onChange={filter} />
    </div>
  )

}

export default PersonFilter