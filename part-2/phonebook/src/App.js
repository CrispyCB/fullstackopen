import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number:'719-456-8213', key: 1 }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ searchQuery, monitorSearchQuery ] = useState('')
  const [ results, updateResults ] = useState([]) 

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
    let queries = []
    persons.forEach(person => {
      if (person.name.toLowerCase().includes(event.target.value.toLowerCase())) {
       const query = {
          name: person.name,
          number: person.number,
          key: Math.floor(Math.random() * 20)
        }
        queries.push(query)
        updateResults(queries)
      }
    });
  }

  const returnResults = () => {
    if (results.length === 0 && persons.length !== 0) {
      return (
        <div>
        {persons.map((person) => <p key={person.key}>{person.name} {person.number}</p>)}
        </div>
      )
    }
    else if (results.length !== 0 && persons.length !== 0) {
      return (
        <div>
        {results.map((result) => <p key={result.key}>{result.name} {result.number}</p>)}
        </div>
      )
    }
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
      {returnResults()}
    </div>
  )
}

export default App