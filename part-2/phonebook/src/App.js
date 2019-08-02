import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number:'719-456-8213', key: 1 }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ searchQuery, monitorSearchQuery ] = useState('')
  let results = []

  const addNumber = (event) => {
    event.preventDefault()
    setPersons(() => {
      let entry = {
        name: newName,
        number: newPhone,
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

  const updateSearchQuery = (event) => {
    monitorSearchQuery(event.target.value)
    console.log(event.target.value)
    results = persons.filter(person => person.name === searchQuery || person.number === searchQuery)
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
      <div>
        search: <input value={searchQuery} onChange={updateSearchQuery} />
      </div>
      <h2>Numbers</h2>
      {results.length === 0 && persons.map((person) => <p key={person.key}>{person.name} {person.number}</p>)}
      {results.length !== 0 && results.map(result => <p key={result.key}>{result.name} {result.number}</p>)}
    </div>
  )
}

export default App