import React from 'react';
import './App.css';

import Course from './Course'

function App() {
  const courses = [
    {
      name: 'Half Stack Application Development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const total = []
  courses.forEach(course => {
    course.parts.forEach(part => {
      total.push(part.exercises)
    })
  });
  return (
    <div>
      <Course courseList={courses}/>
      <h2>Total number of exercises: {total.reduce((a,b)=> a + b)}</h2>
    </div>
  );
}

export default App;
