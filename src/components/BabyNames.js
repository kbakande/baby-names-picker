import React from 'react';
import NamesList from './NamesList'
import SearchBar from './SearchBar'
import HorizontalLine from './HorizontalLine'
import babyNames from '../babyNames.json';


//  sort the array object list 
babyNames.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));


// return the container for the names
const ListName = () => {

    return (
        <div className="name-container">
            <SearchBar />
            <HorizontalLine />
            <NamesList babyNames={babyNames} />
            <HorizontalLine />
        </div >
    )
}

export { ListName }