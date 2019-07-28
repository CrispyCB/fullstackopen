import React from 'react'

const PartsList = ({parts}) => {
    console.log(parts)
    return (
       <div>
           {parts.map((part)=>
           <div key={part.id}>
               <p>Course: {part.name}</p>
               <p>Number of exercises: {part.exercises}</p>
           </div>)}
       </div>
    )
    }
export default PartsList