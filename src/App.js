import './App.css';
import React from 'react';
import Card from './components/Card';

function App() {

  const [cards, setCards] = React.useState(shuffle(allNewCards()))
    
  function allNewCards() {
      const newCards = []
      for (let i = 0; i < 12; i++) {
          newCards.push({id: i, clicked: false})
      }
      return newCards
  }
  
  const cardElements = cards.map(function(card, index) {
    return(
        <Card key={index} value={card.id} clicked={card.clicked}/>
    )
})

console.log(cards)

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
  return (
    <div className="App">
      <header className="App-header">
        {cardElements}
      </header>
    </div>
  );
}

export default App;
