import { useState } from 'react'
import './App.css'

function App() {

  const keys = [
    "Get Started",
    "lucas",
    "James",
    "Chase",
    "Noah"
  ]

  const values = [
    "Click the first name to reveal the last name",
    "umberger",
    "drake",
    "lindal",
    "buckwalter"
  ]

  const [currentCard, setCard] = useState(0)
  const [currentValue, setValue] = useState(keys[0]);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  function nextCard() {
    var tempNum = getRandomInt(keys.length - 1);
    while (currentCard === tempNum) {
      tempNum = getRandomInt(keys.length - 1);
    }
    setCard(tempNum);
    setValue(keys[currentCard]);
  }

  function showValue() {
    if (currentValue === values[currentCard]) {
      setValue(keys[currentCard]);
    }
    else {
      setValue(values[currentCard]);
    }
  }

  return (
    <>
      <div>
        <div className="card" onClick={showValue}>{currentValue}</div>
        <button onClick={nextCard}>Next Name</button>
      </div>
    </>
  )
}

export default App
