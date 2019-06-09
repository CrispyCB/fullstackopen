import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Statistics = (props) => {
    if (props.good === 0 && props.bad === 0 && props.neutral === 0) {
        return (
            <p>No feedback given.</p>
        )
    }
    else {
        return (
            <p>Percentage of good feedback: {(props.good/(props.good+props.bad+props.neutral))*100}%</p>
        )
    }
}
const App = () => {
const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)
return (
    <div>
        <p>Give feedback on Unicafe</p>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {good + bad + neutral}</p>
        <button onClick={()=>setGood(good+1)}>Good</button>
        <button onClick={()=>setBad(bad+1)}>Bad</button>
        <button onClick={()=>setNeutral(neutral+1)}>Neutral</button>
        <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
)

}

ReactDOM.render(<App />, document.getElementById('root'));

