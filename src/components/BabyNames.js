import React from 'react';
import babyNames from '../babyNames.json';

// return 
const ListName = () => {
    return (
        <div className="name-container">
            {babyNames.map((babyName, index) => {

                return (
                    <p className="name-list"> {babyName.name} </p>
                )

            })}
        </div >
    )
}

export { ListName }