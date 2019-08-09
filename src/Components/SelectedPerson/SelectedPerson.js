import React, { useState, useEffect } from 'react';
import posed, { PoseGroup } from 'react-pose';

import 'Components/SelectedPerson/SelectedPerson.css';

const SelectedPerson = ({ person }) => {

    if (!person) return <></>;
    const { name, location, gender, email, login, dob, phone, cell, picture } = person;

    const randomNum = Math.floor(Math.random() * 700) + 300;
    const headerBackgroundStyles = {
        backgroundColor: '#000000',
        background: `center / cover no-repeat url("https://picsum.photos/1000/${randomNum}?blur=5)`
    }

    const Image = posed.img({
        open: { opacity: 1 },
        closed: { opacity: 0 }
    });

    const Name = posed.div({
        open: {
            opacity: 1,
            delay: 300,
            transition: {
                duration: 1200
            }
        },
        closed: {
            opacity: 0
        }
    });

    return (
        <div className="selected_person">
            <div className="selected_person__header" style={headerBackgroundStyles}>
                <PoseGroup>
                    <Image key="1" src={picture.medium} />
                    <Name key="3ns" className='person_name'>{`${name.first} ${name.last}`}</Name>
                </PoseGroup>
            </div>


        </div>
    )
}

export default SelectedPerson;