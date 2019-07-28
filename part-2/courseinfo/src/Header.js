import React from 'react'

const Header = (props) => {
    console.log(props)
    return (
        <div>
           <h2>{props.courseName}</h2>
        </div>
    )
    }
export default Header