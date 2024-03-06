import { useState } from 'react'
import ReactCardFlip from "react-card-flip";
import './App.css'

function App() {

  const keys = [
    "Get Started",
    "When Carlos Alcaraz won the Wimbledon Men's Singles title in 2023, he became the youngest man to do so since who?",
    "Who did Emma Raducanu beat in the 2021 US Open final to secure an astonishing title win?",
    "What nationality is former Grand Slam finalist Marcos Baghdatis?",
    "Steffi Graf won all four Grand Slams on multiple occasions - but which did she win most times?",
    "What is the name of the tournament introduced in 2017 as tennis's version of the Ryder Cup?",
    "Jamie Murray won the Wimbledon Mixed Doubles titles in both 2007 and 2017. Can you name his partners for each occasion?",
    "Which of these players has never won a Grand Slam: Gustavo Kuerten, Marin Cilic, Ivan Ljubičić, Gastón Gaudio, Thomas Johansson, Dominic Thiem?",
    "Who took over from Sue Barker as the main presenter of the BBC's Wimbledon coverage in 2023?",
    "Which two-time WTA Grand Slam champion was Andy Murray's coach for two years between 2014 and 2016?",
    "Tim Henman and Greg Rusedksi have the seam peak world ranking: what was it?",
    "Which two players met in three consecutive Wimbledon finals in 1988, 1989 and 1990?",
    "Nicolas Mahut and John Isner recorded the longest tennis match in history at Wimbledon in 2010. How many games were played in total during the final set?",
    "How many times has Rafael Nadal won the French Open?",
    "Roger Federer was born in which Swiss city?",
    "How many Olympic gold medals has Andy Murray won?",
    "Who was the first person to win Wimbledon with an invitation?",
    "How many Grand Slam singles titles did Serena Williams win?",
    "In which year was Roger Federer and Rafael Nadal's epic Wimbledon final that ended at 9:15pm in the dark, a year before the Centre Court roof was installed?",
    "Who is the last player to win back-to-back Women's singles Grand Slam titles?",
    "Nick Kyrgios' highest ATP tennis ranking is in the top 10 - true or false?"
  ]

  const values = [
    "Click the first name to reveal the last name",
    "Boris Becker",
    "Leylah Annie Fernandez",
    "Cypriot",
    "Wimbledon",
    "The Laver Cup",
    "Jelena Jankovic, Martina Hingis",
    "Ivan Ljubičić",
    "Clare Balding",
    "Amélie Mauresmo",
    "No. 4",
    "Boris Becker, Stefan Edberg",
    "138",
    "14",
    "Basel",
    "Two (2012, 2016)",
    "Goran Ivanisevic",
    "23",
    "2008",
    "Naomi Osaka",
    "False - his highest ranking was No. 13 in 2016"
  ]

  const [currentCard, setCard] = useState(0)
  const [flip, setFlip] = useState(false);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  function nextCard() {
    var tempNum = getRandomInt(keys.length - 1);
    while (currentCard === tempNum) {
      tempNum = getRandomInt(keys.length - 1);
    }
    setCard(tempNum);
    if (flip) {
      setFlip(!flip);
    }
  }

  return (
    <>
    <div>
      <h1>Tennis Knowledge Flashcards</h1>
      <h2>Use these cards to study fun tennis facts!</h2>
      <h4>Number of Cards: {keys.length - 1}</h4>
    </div>
      <ReactCardFlip onClick={() => setFlip(!flip)} isFlipped={flip} flipDirection="vertical">
            <div onClick={() => setFlip(!flip)} style={{
                width: '35vw',
                height: '200px',
                background: 'white',
                fontSize: '2vw',
                color: 'black',
                margin: '20px',
                borderRadius: '10px',
                textAlign: 'center',
                padding: '20px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                {keys[currentCard]}
            </div>
            <div onClick={() => setFlip(!flip)} style={{
                width: '35vw',
                height: '200px',
                background: 'white',
                fontSize: '2vw',
                color: 'black',
                margin: '20px',
                borderRadius: '10px',
                textAlign: 'center',
                padding: '20px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                {values[currentCard]}
            </div>
        </ReactCardFlip>
        <button onClick={nextCard}>Next</button>
    </>
  )
}

export default App
