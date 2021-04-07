import React, { useState } from 'react';
import NamesList from './NamesList'
import SearchBar from './SearchBar'
import HorizontalLine from './HorizontalLine'
import Favorites from './Favorites'
// import searchInput from './SearchInput'
import babyNames from '../babyNames.json';

//  sort the array object list 
// babyNames.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));

// return the container for the names
const ListName = () => {
    // set state for baby names
    const [names, setNames] = useState(babyNames);
    const [favNames, setFavNames] = useState([]);

    // write logic for getting search names
    const searchInput = (event) => {
        const inputSearch = event.target.value.toLowerCase();

        if (inputSearch) {
            const searchNames = babyNames.filter(babyName => {
                if (babyName.name.toLowerCase().includes(inputSearch)) {
                    return containsObject(babyName, favNames)
                }
            });
            setNames(searchNames);
        } else {

            const namesMinusFav = babyNames.filter(babyName => {
                return containsObject(babyName, favNames);
            })
            setNames(namesMinusFav);
        }

        // check if object is in the list
        function containsObject(obj, list) {

            for (let i = 0; i < list.length; i++) {
                if (list[i] === obj) {
                    return false;
                }
            }
            return true;
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