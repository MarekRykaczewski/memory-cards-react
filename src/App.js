import './App.css';
import React from 'react';
import Card from './components/Card';

function App() {

  const [cards, setCards] = React.useState([])
  const [score, setScore] = React.useState(0)
  const [topScore, setTopScore] = React.useState(0)

  React.useEffect(() => {
    setCards(shuffle(allNewCards()))
}, [])

  function allNewCards() {
      const newCards = []
      for (let i = 0; i < 12; i++) {
          newCards.push({id: i, clicked: false})
      }
      return newCards
  }
  
  const cardElements = cards.map(function(card, index) {
    return(
        <Card key={index} value={card.id} clicked={card.clicked} handleClick={() => {updateCard(card.id);setCardsUsingShuffle()}}/>
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
        {cardElements}
        <div> {score} </div>
        <div> Top score: {topScore}</div>
    </div>
  );
}

export default App;
