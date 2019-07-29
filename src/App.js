import React, { useState, useEffect } from 'react';
import axios from 'axios';

//import Card from './Card';
import './App.css';

function App() {

  const [people, updatePeople] = useState([]);
  const [selected, updateSelected] = useState(undefined);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=10').then(res => {
      updatePeople(res.data.results)
    })
  }, [])

  const loadMore = () => {
    axios.get('https://randomuser.me/api/?results=10').then(res => {
      updatePeople([...people,...res.data.results])
    })
  }

  const handleClick = person => {
    updateSelected(person)
  }

  const listPeople = () => {
    if (people.length <= 0) return <div>Loading</div>
    
    return people.map((person,itt) => {     
      if (!person) return <div></div>
      const { login, name, email, location, picture } = person;
      return (
        <button onClick={() => handleClick(person)} className="card" key={login.uuid}>
          <img src={picture.medium} alt={`${name.first}-profile-pic`} />
          <p>{name.first} | {email}</p>
          <p><em>{location.city}</em></p>
          {(person === selected) && "SELECTED"}
        </button>
      )
    })
  }

  return (
    <div className="App">
      <div className="people_list">
      {listPeople()}
      </div>
      <button onClick={loadMore}>Load More</button>
    </div>
  );
}

export default App;
