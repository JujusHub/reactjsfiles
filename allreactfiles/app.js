import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [deckId, setDeckId] = useState('');
  const [card, setCard] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNewDeck = async () => {
      try {
        const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
        const data = await response.json();
        setDeckId(data.deck_id);
      } catch (error) {
        setError('Error fetching new deck');
      }
    };
    fetchNewDeck();
  }, []);

  const drawCard = async () => {
    try {
      const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
      const data = await response.json();
      if (data.success && data.cards.length > 0) {
        setCard(data.cards[0]);
        setError('');
      } else {
        setError('Error: no cards remaining!');
      }
    } catch (error) {
      setError('Error drawing card');
    }
  };

  return (
    <div className="container">
      <h1>Deck of Cards</h1>
      <button onClick={drawCard}>Draw Card</button>
      <div id="card-display">
        {card && <img src={card.image} alt={`${card.value} of ${card.suit}`} />}
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App;
