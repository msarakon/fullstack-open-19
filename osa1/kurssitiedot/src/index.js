import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header'
import Content from './components/content'
import Total from './components/total'

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = 'Reactin perusteet'
  const exercises1 = 10
  const part2 = 'Tiedonvälitys propseilla'
  const exercises2 = 7
  const part3 = 'Komponenttien tila'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1}
               part2={part2}
               part3={part3}
               exercises1={exercises1}
               exercises2={exercises2}
               exercises3={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))