import React from 'react';
import babyNames from '../babyNames.json';


//  sort the array object list 
babyNames.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));


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