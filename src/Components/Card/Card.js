import React, { useContext } from 'react';
import { SelectedPersonContext } from 'Components/App/App';

import 'Components/Card/Card.scss';

const Card = ({ person, children }) => {
    const { login, name, email, location, picture } = person;
    const [selected, updateSelected] = useContext(SelectedPersonContext);
    const handleClick = person => {
        updateSelected(person)
    }
    const className = (person === selected) ? 'card selected' : 'card';

    return (
        <>
            <button onClick={() => handleClick(person)} className={className} key={login.uuid}>
                <div className='card__image_holder'>
                    <img className='card__image' src={picture.medium} alt={`${name.first}-${name.last}-profile-pic`} />                
                </div>
                <div className="card__info">
                <p className='card__name_first'>{`${name.first}`}</p>
                <p className='card__name_last'>{`${name.last}`}</p>
                    <p className='card__location'><em>{`${location.city}, ${location.state}`}</em></p>
                </div>
            </button>
            {children}
        </>
    )
}

export default Card;