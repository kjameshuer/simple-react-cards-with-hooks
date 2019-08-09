import React from 'react';
import Card from 'Components/Card/Card';
import posed from 'react-pose';

import 'Components/PeopleList/PeopleList.css';

const PeopleList = ({ people, children }) => {

    const listPeople = () => {
        if (people.length <= 0) return <div>Loading</div>
        return people.map(person => {
            if (!person) return <>no person</>
            return (
                <Card key={person.login.uuid} person={person} />
            )
        })
    }

    return (
        <div className="people_list">
            <div className="people_list__title">People</div>
            {listPeople()}
            {children}
        </div>
    )
}

export default PeopleList;