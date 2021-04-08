
import { IoManOutline, IoWomanOutline, IoShuffle } from "react-icons/io5";
import { GrAnchor } from "react-icons/gr";
const SearchBar = (props) => {

    return (
        <div className="search-container">
            <IoShuffle className="duck-icon all" />
            <input onChange={props.search} type="input" id="searchInput" placeholder="Search for a name..." className="search-bar"></input>
            {/* <GiPlasticDuck className="duck-icon" /> */}
            <GrAnchor className="duck-icon all" />
            <IoWomanOutline className="duck-icon girls" />
            <IoManOutline className="duck-icon boys" />
        </div>
    )

}

export default SearchBar