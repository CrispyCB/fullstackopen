import React from 'react'

const Submit = ({addNumber, newName, addName, newPhone, addPhone}) => {
    return (
        <form onSubmit={addNumber}>
        <div>
          name: <input value={newName} onChange={addName}/>
          phone: <input value={newPhone} onChange={addPhone}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default Submit