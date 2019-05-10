import React from 'react'

const Total = (props) => {

  const total = props.parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <div>
      <p>yhteensä {total} tehtävää</p>
    </div>
  )
}

export default Total