import React from 'react'

const Results = ({returnResults}) => {
    return (
        <div>
            <h2>Numbers</h2>
            {returnResults()}
        </div>
    )
}

export default Results