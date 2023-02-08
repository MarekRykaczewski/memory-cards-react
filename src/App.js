import './App.css';
import React from 'react';
import Card from './components/Card';

function App() {

  const [cards, setCards] = React.useState(allNewCards())
    
  function allNewCards() {
      const newCards = []
      for (let i = 0; i < 12; i++) {
          newCards.push(i)
      }
      return newCards
  }
  
  const cardElements = cards.map(function(card, index) {
    return(
        <Card key={index} value={cards[card]}/>
    )
})

  return (
    <div className="App">
      <header className="App-header">
        {cardElements}
      </header>
    </div>
  );
}

export default App;
