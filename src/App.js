import './App.css';
import React from 'react';
import Card from './components/Card';

import Chewbacca from "./imgs/chewbacca.webp"
import Ewok from "./imgs/ewok.png"
import Han from "./imgs/han.jpg"
import Leia from "./imgs/leia.webp"
import Luke from "./imgs/luke.jpg"
import Maul from "./imgs/maul.webp"
import Obi from "./imgs/obi.webp"
import Quigon from "./imgs/qui-gon.png"
import Sidious from "./imgs/sidious.jpg"
import Vader from "./imgs/vader.jpg"
import Windu from "./imgs/windu.jpeg"
import Yoda from "./imgs/yoda.webp"


function App() {

  const [cards, setCards] = React.useState([])
  const [score, setScore] = React.useState(0)
  const [topScore, setTopScore] = React.useState(0)
  const IMAGES = ([
    Chewbacca,
    Ewok,
    Han,
    Leia,
    Luke,
    Maul,
    Obi,
    Quigon,
    Sidious,
    Vader,
    Windu,
    Yoda
  ])

  React.useEffect(() => {
    setCards(shuffle(allNewCards()))
}, [])
  
  React.useEffect(() => {
    if (topScore < score) {
      setTopScore(score)
    }
  }, [score, topScore])
    

  function allNewCards() {
      const newCards = []
      for (let i = 0; i < 12; i++) {
          newCards.push({id: i, clicked: false})
      }
      return newCards
  }
  
  const cardElements = cards.map(function(card, index) {
    return(
        <Card key={index} value={card.id} clicked={card.clicked} imgUrl={IMAGES[card.id]} handleClick={() => {updateCard(card.id);setCardsUsingShuffle()}}/>
    )
})

console.log(cards)

  function updateCard(id) {
    const cardToUpdate = cards.filter(card => card.id === id)
    if (!(cardToUpdate[0].clicked)) {
      cardToUpdate[0].clicked = true
      setCards(prevCards => [...prevCards])
      incrementScore()
    } else {
      setCards(shuffle(allNewCards()))
      setScore(0)
    }

  }

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function setCardsUsingShuffle() {
  setCards(prevCards => shuffle(prevCards))
}

function incrementScore() {
  setScore(prevScore => prevScore + 1)
}

  return (
    <div className="App">

        <div className='title'> Star Wars Memory Game </div>

        <div className="score">
          <div className="score--text"> Score: {score} </div>
          <div className="score--text"> Top score: {topScore}</div>
        </div>

        <div className="cards"> 
          {cardElements} 
        </div>
        
        <footer> <span> Marek Rykaczewski </span> </footer>

    </div>
  );
}

export default App;
