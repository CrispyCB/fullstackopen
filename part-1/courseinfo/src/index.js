import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
    const course = "Half Stack Application Development"
    const part1 = "Fundamentals of React"
    const exercises1 = 10
    const part2 = "Using Props To Pass Data"
    const exercises2 = 7
    const part3 = "State of a Component"
    const exercises3 = 14

    return (
        <div>
            <h1>
                {course}
            </h1>
            <p>
                {part1}: Exercises {exercises1}
            </p>
            <p>
                {part2}: Exercises {exercises2}
            </p>
            <p>
                {part3}: Exercises {exercises3}
            </p>
            <p>
                Total number of exercises: {exercises1 + exercises2 + exercises3}
            </p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
