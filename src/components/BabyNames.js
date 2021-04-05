import React from 'react';
import babyNames from '../babyNames.json';


//  sort the array object list 
babyNames.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));


// return 
const ListName = () => {

    return (
        <div className="name-container">
            {/* <div className="search-bar"> <SearchBar /> </div> */}
            <SearchBar />
            <hr></hr>
            {babyNames.map((babyName, index) => {
                if (babyName.sex === "m") {
                    return (
                        <p className="name-list boys" key={index}> {babyName.name} </p>
                    )
                } else {
                    return (
                        <p className="name-list girls" key={index}> {babyName.name} </p>
                    )
                }
            })}
            <hr></hr>
        </div >
    )
}

const SearchBar = () => {

    return (
        <input type="input" id="searchInput" placeholder="Search for a name..." className="search-bar"></input>
    )

}

export { ListName }