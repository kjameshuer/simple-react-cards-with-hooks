import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PeopleList from 'Components/PeopleList/PeopleList';
import SelectedPerson from 'Components/SelectedPerson/SelectedPerson';
import './App.css';

export const SelectedPersonContext = React.createContext([{}, () => { }]);

function App() {

  const [people, updatePeople] = useState([]);
  const [selected, updateSelected] = useState(undefined);
  const [fetchError, updateFetchError] = useState(undefined);

  useEffect(() => {
    let isSubscribed = true;
    axios.get('https://randomuser.me/api/?results=10')
      .then(res => {
        if (isSubscribed) {
          updatePeople([...people, ...res.data.results])
          updateSelected(res.data.results[0])
          updateFetchError(undefined);
        }
      })
      .catch(err => {
        updateFetchError(err.response.data)
      })
    return () => isSubscribed = false

  }, [])

  const loadPeople = async () => {
    let isSubscribed = true;
    await axios.get('https://randomuser.me/api/?results=10')
      .then(res => {
        if (isSubscribed) {
          updatePeople([...people, ...res.data.results])
          updateFetchError(undefined);
        }
      })
      .catch(err => {
        updateFetchError(err.response.data)
      })
    return () => isSubscribed = false
  }

  return (
    <div className="App">
      <SelectedPersonContext.Provider value={[selected, updateSelected]}>
        {fetchError && <div>{fetchError}</div>}
        <PeopleList people={people}>
          <button className="load_more" onClick={loadPeople}>Load More</button>
        </PeopleList>
      </SelectedPersonContext.Provider>
      <SelectedPerson person={selected} />
    </div>
  );
}

export default App;
