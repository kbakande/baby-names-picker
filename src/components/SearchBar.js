
import { IoManOutline, IoWomanOutline, IoShuffle } from "react-icons/io5";
import { GrAnchor } from "react-icons/gr";
const SearchBar = (props) => {

    return (
        <div className="search-container">
            <IoShuffle className="duck-icon shuffle" />
            <input onChange={props.search} type="input" id="searchInput" placeholder="Search for a name..." className="search-bar"></input>
            {/* <GiPlasticDuck className="duck-icon" /> */}
            <GrAnchor className="duck-icon all" />
            <IoWomanOutline className="duck-icon girls" onClick={props.girlHandler} />
            <IoManOutline className="duck-icon boys" onClick={props.boyHandler} />
        </div>
    )
}

export default SearchBar