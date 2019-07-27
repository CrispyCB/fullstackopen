import React, { useState } from 'react';
import './App.css';

function App() {
  const [quoteNum, setquoteNum] = useState(0)
  const [points, setPoints] = useState(0)
  let quotes = [
    {
      quote:
        "CRM is rather boring in itself. It's the fortunes you can build using CRM that makes it so interesting.",
      name: "Michael McCafferty",
      points: 0
    },
    {
      quote: "Computer hacking was like a chemical bond holding us all together.",
      name: "Rachel Zhang",
      points: 0
    },
    {
      quote:
        "To get Windows 10 reliable, I had to lobotomise the installed software and USB devices.",
      name: "Steven Magee",
      points: 0
    },
    {
      quote: "In IT, there is nothing like ‘all of a sudden’.",
      name: "Sachin Kodagali",
      points: 0
    },
    {
      quote:
        "If a shell is in front of you side by side with an editor, you must be a developer.",
      name: "Mussadiq Abdul Rahim",
      points: 0
    },
    {
      quote:
        "That's the thing about people who think they hate computers. What they really hate is lousy programmers.",
      name: "Larry Niven",
      points: 0
    }
  ]

  function increment () {
    setPoints(points => points + 1)
    quotes[quoteNum].points = quotes[quoteNum].points + points
    console.log(quotes[quoteNum].name, quotes[quoteNum].points)
  }
  function randomize () {
    setPoints(points => points - points)
    setquoteNum(Math.floor(Math.random() * Math.floor(quotes.length)))
    console.log(quotes[0].name, quotes[quoteNum].points)
  }
  return (
    <div className="App">
      <section id="quotes-wrapper">
        <h2>Current quote:</h2>
        <p id="quote">"{quotes[quoteNum].quote}"</p>
        <p id="name">- {quotes[quoteNum].name}</p>
        <p id="points">{points} points</p>
      </section>
      <section id="client">
      <button id="randomize" onClick={() => {randomize()}}>
      Random quote
      </button>
      <button id="vote" onClick={() => {increment()}}>
      Vote for this quote
      </button>
      </section>
    </div>
  );
}

export default App;
