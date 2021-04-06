const SearchBar = (props) => {

    return (
        <input onChange={props.search} type="input" id="searchInput" placeholder="Search for a name..." className="search-bar"></input>
    )

}


export default SearchBar