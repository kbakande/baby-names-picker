import React, { useState } from 'react';
import NamesList from './NamesList'
import SearchBar from './SearchBar'
import HorizontalLine from './HorizontalLine'
import Favorites from './Favorites'
import babyNames from '../babyNames.json';


// return the container for the names
const ListName = () => {
    // set state for baby & favourite names
    const [names, setNames] = useState(babyNames);
    const [favNames, setFavNames] = useState([]);

    // check if object is in the list
    function containsObject(obj, list) {

        for (let i = 0; i < list.length; i++) {
            if (list[i] === obj) {
                return false;
            }
        }
        return true;
    }

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

    const handleGirlsIcon = (event) => {
        const iconList = event.currentTarget.parentNode.childNodes;
        iconList.forEach(icon => {
            if (icon.classList.contains(["girls"])) {
                icon.classList.add("active")
            } else {
                icon.classList.remove("active")
            }
        })

        const girlNames = babyNames.filter(babyName => {
            if (babyName["sex"] === "f") {
                return containsObject(babyName, favNames)
            }
        })
        setNames(girlNames);
    }

    const handleBoysIcon = (event) => {
        // console.log(event.currentTarget.parentNode.childNodes)
        const iconList = event.currentTarget.parentNode.childNodes;
        iconList.forEach(icon => {
            if (icon.classList.contains(["boys"])) {
                icon.classList.add("active")
            } else {
                icon.classList.remove("active")
            }
        })

        const boyNames = babyNames.filter(babyName => {
            if (babyName["sex"] === "m") {
                return containsObject(babyName, favNames)
            }
        })
        setNames(boyNames);
    }

    const handleAllIcon = (event) => {
        const iconList = event.currentTarget.parentNode.childNodes;
        iconList.forEach(icon => {
            if (icon.classList.contains(["all"])) {
                icon.classList.add("active")
            } else {
                icon.classList.remove("active")
            }
        })

        const allNames = babyNames.filter(babyName => {
            return containsObject(babyName, favNames)
        })
        setNames(allNames);
    }

    return (
        < div className="name-container">
            <SearchBar search={searchInput} allHandler={handleAllIcon} girlHandler={handleGirlsIcon} boyHandler={handleBoysIcon} />
            <Favorites favNames={favNames} handleNamesReturn={handleNamesReturn} />
            <HorizontalLine />
            <NamesList babyNames={names} favFunc={FavouriteNames} />
            <HorizontalLine />
        </div >
    )
}

export { ListName }