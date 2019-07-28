import React, { useState, useEffect } from "react";

function App() {
  const [quoteNum, setquoteNum] = useState(0);
  const [quotes, updateQuotes] = useState([
    {
      quote:
        "CRM is rather boring in itself. It's the fortunes you can build using CRM that makes it so interesting.",
      name: "Michael McCafferty",
      votes: 0
    },
    {
      quote:
        "Computer hacking was like a chemical bond holding us all together.",
      name: "Rachel Zhang",
      votes: 0
    },
    {
      quote:
        "To get Windows 10 reliable, I had to lobotomise the installed software and USB devices.",
      name: "Steven Magee",
      votes: 0
    },
    {
      quote: "In IT, there is nothing like ‘all of a sudden’.",
      name: "Sachin Kodagali",
      votes: 0
    },
    {
      quote:
        "If a shell is in front of you side by side with an editor, you must be a developer.",
      name: "Mussadiq Abdul Rahim",
      votes: 0
    },
    {
      quote:
        "That's the thing about people who think they hate computers. What they really hate is lousy programmers.",
      name: "Larry Niven",
      votes: 0
    }
  ]);

  function increment() {
    //calls updateQuotes update-state hook
    updateQuotes(() => {
      //sets newQuotes to the array of quotes
      let newQuotes = [...quotes];
      //updates votes property of specified newQuote
      newQuotes[quoteNum].votes += 1;
      //returns newQuotes array to be passed in to updateQuotes: updates state to value of newQuotes
      return newQuotes;
    });
  }
  function randomize() {
    setquoteNum(Math.floor(Math.random() * Math.floor(quotes.length)));
  }
  function bestQuote() {
    let bestquote = quotes.reduce((max, quote) =>
      max.votes > quote.votes ? max : quote
    );
    return {
      quote: bestquote.quote,
      name: bestquote.name,
      votes: bestquote.votes
    };
  }

  useEffect(() => {
    //update DOM every time bestQuote fires
    bestQuote();
  });

  return (
    <div className="App">
      <section id="quotes-wrapper">
        <h2>Quote of the day:</h2>
        <p>"{bestQuote().quote}"</p>
        <p>- {bestQuote().name}</p>
        <p>This quote has {bestQuote().votes} votes.</p>
        <h2>Current quote:</h2>
        <p id="quote">"{quotes[quoteNum].quote}"</p>
        <p id="name">- {quotes[quoteNum].name}</p>
        <p id="points">{quotes[quoteNum].votes} votes.</p>
      </section>
      <section id="client">
        <button
          id="randomize"
          onClick={() => {
            randomize();
          }}
        >
          Random quote
        </button>
        <button
          id="vote"
          onClick={() => {
            increment();
          }}
        >
          Vote for this quote
        </button>
      </section>
    </div>
  );
}

export default App;
