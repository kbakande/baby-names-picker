
import { GiPlasticDuck } from "react-icons/gi";

const SearchBar = (props) => {

    return (
        <div className="search-container">
            <input onChange={props.search} type="input" id="searchInput" placeholder="Search for a name..." className="search-bar"></input>
            {/* <p className='icon-list active'> <GiPlasticDuck className="duck-icon" /> </p>
            <p className='icon-list active'> <GiPlasticDuck className="duck-icon" /> </p> */}
            <GiPlasticDuck className="duck-icon active" />
            <GiPlasticDuck className="duck-icon active" />
            <GiPlasticDuck className="duck-icon active" />
        </div>
    )

}

export default SearchBar