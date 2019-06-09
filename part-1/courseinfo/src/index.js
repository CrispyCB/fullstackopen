import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Part = (props) => {
    return (
        <p>
            {props.part}: {props.exercises}
        </p>
    )
}

const Content = (props) => {
    const part1 = "Fundamentals of React"
    const exercises1 = 10
    const part2 = "Using Props To Pass Data"
    const exercises2 = 7
    const part3 = "State of a Component"
    const exercises3 = 14
    return (
        <div>
            <Part part={part1} exercises={exercises1}/>
            <Part part={part2} exercises={exercises2}/>
            <Part part={part3} exercises={exercises3}/>
        </div>
    )
}

const Header = (props) => {
    return (
        <h1>
            {props.course}
        </h1>
    )
}

const Total = (props) => {
    return (
        <p>
            Total number of exercises: {props.exercises1 + props.exercises2 + props.exercises3}
        </p>
    )
}

const App = () => {
    const course = "Half Stack Application Development"
    return (
        <div>
            <Header course={course} />
            <Content />
            <Total exercises1={10} exercises2={7} exercises3={14} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
