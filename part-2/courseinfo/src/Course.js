import React from 'react'
import Header from './Header'
import PartsList from './PartsList'

const Course = ({courseList}) => {
    return (
    <div>
      {courseList.map((course) =>
      <div key={course.id}>
      <Header courseName={course.name} />
      <PartsList parts={course.parts} key={course.parts.id}/>
      </div>
      )}
    </div>
    )
  }

export default Course