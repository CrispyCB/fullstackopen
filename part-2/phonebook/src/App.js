import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', key: 1 }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [newPhone, setNewPhone ] = useState('')

  const addNumber = (event) => {
    event.preventDefault()
    setPersons(() => {
      let entry = {
        name: newName,
        phone: newPhone,
        key: persons.length + 1
      }
      let people = [...persons];
      if (people.some((person) => entry.name === person.name)) {
        alert(`${entry.name} already exists!`)
      }
      else {
        people.push(entry)
      }
      return people
    })
  }
  const addName = (event) => {
    setNewName(event.target.value)
    console.log(event.target.value)
  }
  
  const addPhone = (event) => {
    setNewPhone(event.target.value)
    console.log(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input value={newName} onChange={addName}/>
          phone: <input value={newPhone} onChange={addPhone}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => <p key={person.key}>{person.name} {person.phone}</p>)}
    </div>
  )
}

export default App