import React, { useState } from 'react';
import NamesList from './NamesList'
import SearchBar from './SearchBar'
import HorizontalLine from './HorizontalLine'
import babyNames from '../babyNames.json';


//  sort the array object list 
babyNames.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));


// return the container for the names
const ListName = () => {
    const [names, setNames] = useState(babyNames);

    // write logic for getting search names
    const searchInput = (event) => {
        const inputSearch = event.target.value.toLowerCase();

        if (inputSearch) {
            const searchNames = babyNames.filter((babyName) => {
                return babyName.name.toLowerCase().includes(inputSearch)
            });
            setNames(searchNames);
        } else {
            setNames(babyNames);
        }
    }

    return (
        <div className="name-container">
            <SearchBar search={searchInput} />
            <HorizontalLine />
            <NamesList babyNames={names} />
            <HorizontalLine />
        </div >
    )
}

export { ListName }