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
            <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
            <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
            <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
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
            Total number of exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
        </p>
    )
}

const App = () => {
    const course = "Half Stack Application Development"
    const parts = [{
        name: "Fundamentals of React",
        exercises: 10
    },
    {
        name: "Using Props to Pass Data",
        exercises: 7
    },
    {
        name: "State of a Component",
        exercises: 14
    }]
    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
