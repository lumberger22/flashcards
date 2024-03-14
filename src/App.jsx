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
    "Tim Henman and Greg Rusedksi have the seam peak world ranking: what was it?" : "4",
    "Which two players met in three consecutive Wimbledon finals in 1988, 1989 and 1990?" : "Boris Becker, Stefan Edberg",
    "Nicolas Mahut and John Isner recorded the longest tennis match in history at Wimbledon in 2010. How many games were played in total during the final set?" : "138",
    "How many times has Rafael Nadal won the French Open?" : "14",
    "Roger Federer was born in which Swiss city?" : "Basel",
    "How many Olympic gold medals has Andy Murray won?": "2",
    "Who was the first person to win Wimbledon with an invitation?": "Goran Ivanisevic",
    "How many Grand Slam singles titles did Serena Williams win?": "23",
    "In which year was Roger Federer and Rafael Nadal's epic Wimbledon final that ended at 9:15pm in the dark, a year before the Centre Court roof was installed?" : "2008",
    "Who is the last player to win back-to-back Women's singles Grand Slam titles?" : "Naomi Osaka",
    "Nick Kyrgios' highest ATP tennis ranking is in the top 10 - true or false?" : "false",
    "End of flashcards" : "Reset to try again" 
  };

  const keys = Object.keys(flashcards);
  const values = Object.values(flashcards);

  const [currentCard, setCard] = useState(0)
  const [flip, setFlip] = useState(false);
  const [correctGuess, setCheckedGuess] = useState('');
  const [maxStreak, setMaxStreak] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [form, setForm] = useState({
    guess: ''
  });

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

    setTimeout(() => {
      setCard(currentCard + 1);
    }, 200);
    
    setForm({ guess:'' });
    setCheckedGuess('');
  }

  function prevCard() {
    if (flip) {
      setFlip(!flip);
    }

    setTimeout(() => {
      setCard(currentCard - 1);
    }, 200);
    setForm({ guess:'' });
    setCheckedGuess('');
  }

  const checkAnswer = (e) => {
    e.preventDefault();
    if (form.guess != values[currentCard]) {
      setCheckedGuess('wrong');
      if (currentStreak > maxStreak) {
        setMaxStreak(currentStreak);
      }
      setCurrentStreak(0);
    }
    else {
      setCheckedGuess('correct');
      let curr = currentStreak + 1;
      setCurrentStreak((currentStreak + 1));
      if (curr > maxStreak) {  
        setMaxStreak(curr);
      }
    }
  }

  function resetCards() {
    if (flip) {
      setFlip(!flip);
    }

    setTimeout(() => {
      setCard(0);
    }, 200);
    
    setForm({ guess:'' });
    setCheckedGuess('');
    setCurrentStreak(0);
  }

  const handleForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <>
    <div className='middleContainer'>
      <div>
        <h1>Tennis Knowledge Flashcards</h1>
        <h2>Use these cards to study fun tennis facts!</h2>
        <br/>
      </div>
        <ReactCardFlip onClick={() => setFlip(!flip)} isFlipped={flip} flipDirection="vertical">
              <div className="flashcard" onClick={() => setFlip(!flip)}>{showValue(keys[currentCard])}</div>
              <div className="flashcard" onClick={() => setFlip(!flip)}>{values[currentCard]}</div>
          </ReactCardFlip>
          <br/>
          <form onSubmit={checkAnswer}>
            <label htmlFor='name'>Guess the answer: </label>
            <input 
              value={form.guess} 
              disabled={currentCard === 0 | currentCard == keys.length - 1}
              id={correctGuess} 
              type="text" 
              name="guess"
              autoComplete='off' 
              onChange={handleForm}/>
            <input type='submit' disabled={currentCard === 0 | currentCard == keys.length - 1} value='Check' />
          </form>
          <div className='button-container'>
            <button onClick={resetCards}><span>&#8635;</span></button>
            <button onClick={prevCard} disabled={currentCard === 0}><span>&#8592;</span></button>
            <button onClick={nextCard} disabled={currentCard === keys.length - 1}><span>&#8594;</span></button>
          </div>
    </div>
    <div className='rightContainer'>
      <h2>Current Streak: {currentStreak}</h2>
      <h2>Max Streak: {maxStreak}</h2>
    </div>
    </>
  )
}

export default App
