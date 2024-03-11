import { useState } from 'react'
import ReactCardFlip from "react-card-flip";
import './App.css'

function App() {

  const flashcards = {
    "Get Started!" : "Click the flashcard to reveal the answer",
    "src:patrick-mouratoglou.jpg" : "Patrick Mouratoglou",
    "src:thiem.jpg" : "Dominic Thiem",
    "src:bublik.jpg" : "Alexander Bublik",
    "src:alex-de-minaur.jpg" : "Alex De Minaur",
    "src:humbert.jpg" : "Ugo Humbert",
    "When Carlos Alcaraz won the Wimbledon Men's Singles title in 2023, he became the youngest man to do so since who?" : "Boris Becker",
    "Who did Emma Raducanu beat in the 2021 US Open final to secure an astonishing title win?" : "Leylah Annie Fernandez",
    "What nationality is former Grand Slam finalist Marcos Baghdatis?" : "Cypriot",
    "Steffi Graf won all four Grand Slams on multiple occasions - but which did she win most times?" : "Wimbledon",
    "What is the name of the tournament introduced in 2017 as tennis's version of the Ryder Cup?" : "The Laver Cup",
    "Jamie Murray won the Wimbledon Mixed Doubles titles in both 2007 and 2017. Can you name his partners for each occasion?" : "Jelena Jankovic, Martina Hingis",
    "Which of these players has never won a Grand Slam: Gustavo Kuerten, Marin Cilic, Ivan Ljubičić, Gastón Gaudio, Thomas Johansson, Dominic Thiem?" : "Ivan Ljubičić",
    "Who took over from Sue Barker as the main presenter of the BBC's Wimbledon coverage in 2023?" : "Clare Balding",
    "Which two-time WTA Grand Slam champion was Andy Murray's coach for two years between 2014 and 2016?": "Amélie Mauresmo",
    "Tim Henman and Greg Rusedksi have the seam peak world ranking: what was it?" : "No.4",
    "Which two players met in three consecutive Wimbledon finals in 1988, 1989 and 1990?" : "Boris Becker, Stefan Edberg",
    "Nicolas Mahut and John Isner recorded the longest tennis match in history at Wimbledon in 2010. How many games were played in total during the final set?" : "138",
    "How many times has Rafael Nadal won the French Open?" : "14",
    "Roger Federer was born in which Swiss city?" : "Basel",
    "How many Olympic gold medals has Andy Murray won?": "Two (2012, 2016)",
    "Who was the first person to win Wimbledon with an invitation?": "Goran Ivanisevic",
    "How many Grand Slam singles titles did Serena Williams win?": "23",
    "In which year was Roger Federer and Rafael Nadal's epic Wimbledon final that ended at 9:15pm in the dark, a year before the Centre Court roof was installed?" : "2008",
    "Who is the last player to win back-to-back Women's singles Grand Slam titles?" : "Naomi Osaka",
    "Nick Kyrgios' highest ATP tennis ranking is in the top 10 - true or false?" : "False - his highest ranking was No. 13 in 2016"
  };

  const keys = Object.keys(flashcards);
  const values = Object.values(flashcards);

  const [currentCard, setCard] = useState(0)
  const [flip, setFlip] = useState(false);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function showValue(value) {
    if (value.substring(0,3) == "src") {
      return <img style= {{ height: '180px', width: 'auto', borderRadius: '7px' }} src={value.substring(4)} />;
    }
    else {
      return value;
    }
  }

  function nextCard() {
    if (flip) {
      setFlip(!flip);
    }

    sleep(200).then(() => {
    var tempNum = getRandomInt(keys.length - 1);
    while (currentCard === tempNum) {
      tempNum = getRandomInt(keys.length - 1);
    }
    setCard(tempNum);
    });
  }

  return (
    <>
    <div>
      <h1>Tennis Knowledge Flashcards</h1>
      <h2>Use these cards to study fun tennis facts!</h2>
      <h4>Number of Cards: {keys.length - 1}</h4>
    </div>
      <ReactCardFlip onClick={() => setFlip(!flip)} isFlipped={flip} flipDirection="vertical">
            <div className="flashcard" onClick={() => setFlip(!flip)}>{showValue(keys[currentCard])}</div>
            <div className="flashcard" onClick={() => setFlip(!flip)}>{values[currentCard]}</div>
        </ReactCardFlip>
        <div className='button-container'>
          <button onClick={() => location.reload()}><span>&#8635;</span></button>
          <button><span>&#8592;</span></button>
          <button onClick={nextCard}><span>&#8594;</span></button>
          <button><span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-shuffle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.6 9.6 0 0 0 7.556 8a9.6 9.6 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.6 10.6 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.6 9.6 0 0 0 6.444 8a9.6 9.6 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5"/>
            <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192m0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192"/>
            </svg>
          </span></button>
        </div>
        
    </>
  )
}

export default App
