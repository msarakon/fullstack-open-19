import React from 'react'
import Part from './part'

const Content = (props) => {

  return (
    <div>
      {
        props.parts.map(part => {
          return <Part key={part.name} name={part.name} exercises={part.exercises} />
        })
      }
    </div>
  )
}

export default Content