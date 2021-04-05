import React from 'react';
import babyNames from '../babyNames.json';


//  sort the array object list 
babyNames.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));


// return 
const ListName = () => {
    return (
        <div className="name-container">
            {babyNames.map((babyName, index) => {
                console.log(babyName.sex === "m")
                if (babyName.sex === "m") {
                    return (
                        <p className="name-list boys"> {babyName.name} </p>
                    )
                } else {
                    return (
                        <p className="name-list girls"> {babyName.name} </p>
                    )
                }


            })}
        </div >
    )
}

export { ListName }