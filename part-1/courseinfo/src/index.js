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
    return (
        <div>
            <Part part={props.part1.name} exercises={props.part1.exercises}/>
            <Part part={props.part2.name} exercises={props.part2.exercises}/>
            <Part part={props.part3.name} exercises={props.part3.exercises}/>
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
    const part1 = {
        name: "Fundamentals of React",
        exercises: 10
    }
    const part2 = {
        name: "Using Props to Pass Data",
        exercises: 7
    }
    const part3 = {
        name: "State of a Component",
        exercises: 14
    }
    return (
        <div>
            <Header course={course} />
            <Content part1={part1} part2={part2} part3={part3}/>
            <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
