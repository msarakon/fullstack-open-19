import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/course'

const App = () => {
  const courses = [
    {
      name: 'Half Stack -sovelluskehitys',
      id: 1,
      parts: [
        {
          name: 'Reactin perusteet',
          exercises: 10,
          id: 1
        },
        {
          name: 'Tiedonvälitys propseilla',
          exercises: 7,
          id: 2
        },
        {
          name: 'Komponenttien tila',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 7,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 5
        },
        {
          name: 'Middlewaret',
          exercises: 7,
          id: 6
        }
      ]
    }
  ]

  return (
    <div>
      {
        courses.map(course => <Course key={course.id} course={course} /> )
      }
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))