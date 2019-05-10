import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => {
  return ( <button onClick={onClick}>{text}</button> )
}

const Statistic = ({ label, value }) => {
  return (
    <tr>
      <td>{label}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ reviews }) => {

  const total = Object.values(reviews).reduce((sum, count) => sum + count, 0)

  if (total > 0) {
    const avg = (reviews.good + -reviews.bad) / total
    const posPercentage = reviews.good / total * 100
  
    return (
      <table>
        <tbody>
          <Statistic label="hyvä" value={reviews.good} />
          <Statistic label="neutraali" value={reviews.neutral} />
          <Statistic label="huono" value={reviews.bad} />
          <Statistic label="yhteensä" value={total} />
          <Statistic label="keskiarvo" value={avg} />
          <Statistic label="positiivisia" value={posPercentage + ' %'} />
        </tbody>
      </table>
    )
  }

  return (
    <div>
      <p>Ei yhtään palautetta annettu</p>
    </div>
  )
}

const App = () => {

  const [reviews, setReview] = useState({ good: 0, neutral: 0, bad: 0 })

  const setGood = () => setReview({ ...reviews, good: reviews.good + 1 })
  const setNeutral = () => setReview({ ...reviews, neutral: reviews.neutral + 1 })
  const setBad = () => setReview({ ...reviews, bad: reviews.bad + 1 })

  return (
    <div>
      <h1>anna palautetta</h1>
      <div>
        <Button onClick={() => setGood()} text="hyvä" />
        <Button onClick={() => setNeutral()} text="neutraali" />
        <Button onClick={() => setBad()} text="huono" />
      </div>
      <h1>statistiikka</h1>
      <Statistics reviews={reviews} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
