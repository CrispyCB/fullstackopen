import React, { useState } from 'react'

import Search from './Search'
import Results from './Results'
import Submit from './Submit'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number:'719-456-8213', key: 1 },
    { name: 'Ada Lovelace', number:'713-245-3412', key: 2 },
    { name: 'Charles Babbage', number:'786-321-3216', key: 3 },
    { name: 'Rambo Sanderson', number:'834-452-1421', key: 4 }
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
          key: Math.floor(Math.random())
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
      <Submit addNumber={addNumber} newName={newName} addName={addName} newPhone={newPhone} addPhone={addPhone} />
      <Search searchQuery={searchQuery} updateSearchQuery={updateSearchQuery}/>
      <Results returnResults={returnResults} />
    </div>
  )
}

export default App