import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/course'

const App = () => {
  const courses = [
    {
      name: 'Half Stack -sovelluskehitys',
      parts: [
        {
          name: 'Reactin perusteet',
          exercises: 10
        },
        {
          name: 'Tiedonvälitys propseilla',
          exercises: 7
        },
        {
          name: 'Komponenttien tila',
          exercises: 14
        },
        {
          name: 'Redux',
          exercises: 7
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
          id: 1
        },
        {
          name: 'Middlewaret',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {
        courses.map(course => <Course course={course} /> )
      }
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))