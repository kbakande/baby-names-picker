import React, { useState } from 'react';
import NamesList from './NamesList'
import SearchBar from './SearchBar'
import HorizontalLine from './HorizontalLine'
import Favorites from './Favorites'
// import searchInput from './SearchInput'
import babyNames from '../babyNames.json';

//  sort the array object list 
babyNames.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

// return the container for the names
const ListName = () => {
    // set state for baby names
    const [names, setNames] = useState(babyNames);
    const [favNames, setFavNames] = useState([]);

    // write logic for getting search names
    const searchInput = (event) => {
        const inputSearch = event.target.value.toLowerCase();

        if (inputSearch) {
            const searchNames = names.filter((babyName) => {
                return babyName.name.toLowerCase().includes(inputSearch);
            });
            setNames(searchNames);
        } else {
            setNames(babyNames);
        }
    };

    const FavouriteNames = (event) => {
        const clickName = event.target.innerText;
        const tempFavNames = [];

        const newNames = names.filter((name) => {
            if (name.name === clickName) {
                tempFavNames.push(name);
            } else {
                return name.name != clickName;
            }
        })

        setNames(newNames);
        setFavNames([...favNames, ...tempFavNames]);
    }

    const handleNamesReturn = event => {
        const clickName = event.target.innerText;
        const returnedName = [];

        const favRemain = favNames.filter((name) => {
            if (name.name === clickName) {
                returnedName.push(name);
            } else {
                return name.name != clickName;
            }
        })

        setFavNames(favRemain);
        setNames([...names, ...returnedName]);
    }

    return (

        < div className="name-container">
            <SearchBar search={searchInput} />
            <Favorites favNames={favNames} handleNamesReturn={handleNamesReturn} />
            <HorizontalLine />
            <NamesList babyNames={names} favFunc={FavouriteNames} />
            <HorizontalLine />
        </div >
    )
}

export { ListName }