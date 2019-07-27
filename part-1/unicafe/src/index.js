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

const Button = (props) => {
    return (
        <button onClick={props.onClick}>{props.text}</button>
    )
}

const App = () => {
const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)
return (
    <div>
        <p>Give feedback on Unicafe</p>
        <table>
        <tr>
            <td>
                Good: {good}
            </td>
        </tr>
        <tr>
            <td>
                Neutral: {neutral}
            </td>
        </tr>
        <tr>
            <td>
                Bad: {bad}
            </td>
        </tr>
        <tr>
            <td>
                Total: {good + bad + neutral}
            </td>
        </tr>
        </table>
        <Statistics good={good} bad={bad} neutral={neutral}/>
        <Button onClick={()=>setGood(good+1)} text={"Good"} />
        <Button onClick={()=>setBad(bad+1)} text={"Bad"}/>
        <Button onClick={()=>setNeutral(neutral+1)} text={"Neutral"}/>
    </div>
)

}

ReactDOM.render(<App />, document.getElementById('root'));

